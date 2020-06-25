import gql from 'graphql-tag'

export const schema = gql`
  type ChannelByTopicTotals {
    totals: JSON
  }

  type Query {
    channelByTopicTotals: [ChannelByTopicTotals!]!
  }
`
