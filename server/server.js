const express = require('express');
const {ApolloServer,gql} = require('@apollo/server');
const path = require('path');
const {typeDefs, resolvers} = require('./schemas');
const { expressMiddleware } = require('@apollo/server/express4');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

console.log(typeDefs,resolvers);
const server = new ApolloServer({typeDefs,resolvers});
console.log("hi2"); //Server can not be started it stops at const server

const startApolloServer = async () => {
  await server.start();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
