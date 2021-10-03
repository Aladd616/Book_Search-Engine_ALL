const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int!
    savedBooks: [Book]
  }

  input savedBook {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    me: User
  }

  Type Mutation{
      login(email: String!, password: String!): Auth
      saveBook(input: savedBook!): User
      removeBook(bookId: ID!): User
  }

  type Auth {
      token: ID!
      user: User
  }
`;

module.exports = typeDefs;
