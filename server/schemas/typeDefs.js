const typeDefs = `
  type User {
    username: String
    password: String
  }

  type Query {
    user: User
  }

  type Mutation {
    signup(
      username: String!,
      password: String!
    ): User

    login(
      username: String!,
      password: String!
    ): User
  }
`;

module.exports = typeDefs;