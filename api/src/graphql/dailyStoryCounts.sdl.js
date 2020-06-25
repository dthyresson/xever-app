import gql from 'graphql-tag'

export const schema = gql`
  type Calendar {
    day: String!
    value: Int!
  }

  type Query {
    dailyStoryCounts: [Calendar!]!
  }
`
