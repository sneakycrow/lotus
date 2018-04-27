const express = require('express');
const graphqlHTTP = require('express-graphql');
const { userSchema } = require('./server/models/user');

const root = {
	hello: () => {
		return 'Hello World';
	},
};

const app = express();

app.use('/api', graphqlHTTP({
	schema: userSchema,
	rootValue: root,
	grapiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/api');


