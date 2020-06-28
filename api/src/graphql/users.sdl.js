import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    emailVerified: Boolean
    lastIp: String
    lastLogin: DateTime!
    loginsCount: Int!
    name: String!
    nickname: String!
    picture: String!
    userId: String!
  }

  type Query {
    users: [User!]
    user(id: Int!): User
    userByUserId(userId: String!): User!
  }

  input CreateUserInput {
    updatedAt: DateTime
    email: String!
    emailVerified: Boolean
    lastIp: String
    lastLogin: DateTime
    loginsCount: Int
    name: String!
    nickname: String!
    picture: String!
    userId: String!
  }

  input UpdateUserInput {
    updatedAt: DateTime
    email: String
    emailVerified: Boolean
    lastIp: String
    lastLogin: DateTime
    loginsCount: Int
    name: String
    nickname: String
    picture: String
    userId: String
  }
`
