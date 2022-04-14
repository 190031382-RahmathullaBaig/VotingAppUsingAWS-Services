'use strict';

console.log('Loading function');
 

// const doc = require('dynamodb-doc');
// const dynamo = new doc.DynamoDB();

const doc = require('aws-sdk');
// const doc = require('dynamodb-doc');
const dynamo =  new doc.DynamoDB.DocumentClient();

const AWS = require('aws-sdk');
const s3 = new AWS.S3(); 

exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    var writeResultsToS3 = (err, results) => {
        if ( err ) {
            console.log(err, err.stack);
            callback(err, 'There was an error');
        } else {
		// Add Bucket Name
            var params = {Bucket: 'Your S3 BUCKET NAME', Key: 'data.json', Body: JSON.stringify(results)};
            s3.upload(params, callback);
        }
    };
    //Add Table Name
    dynamo.scan({ TableName: 'YOUR TABLE NAME', ConsistentRead: true }, writeResultsToS3);
    
};
