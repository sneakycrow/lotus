import express from 'express';
import graphqlHTTP from 'express-graphql';
import { userSchema } from './server/models/user';

const root = {
	hello: () => {
		return 'Hello World';
	},
};

const app = express();

app.use('/api', graphqlHTTP({
	schema: userSchema,
	rootValue: root,
	graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/api');


