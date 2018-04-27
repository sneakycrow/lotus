const { buildSchema } = require('graphql');

export const userSchema = buildSchema(`
	type Query {
		hello: String
	}
`);