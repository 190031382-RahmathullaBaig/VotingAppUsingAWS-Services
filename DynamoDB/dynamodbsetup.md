# DynamoDB Setup

1. Create VoteTally table
	a. Index on candidate String
	b. 1 read/ 1 write channel
2. Add Trigger to CastVoteJSON lambda
	a. Latest result
	b. batch size of 1