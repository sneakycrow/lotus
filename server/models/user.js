import { buildSchema } from 'graphql';

export const userSchema = buildSchema(`
	type Query {
		hello: String
	}
`);