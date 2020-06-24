import gql from 'graphql-tag'

export const schema = gql`
  type Story {
    author: String
    categories: String
    categoryGroup: String
    channelEmojiIcon: String
    channelId: String
    channelName: String
    companyNames: JSON
    conceptEmojiIcons: JSON
    conceptNames: JSON
    conceptRuleEmojiIcons: JSON
    createdAt: String
    engagement: Int
    engagementRate: Float
    entityTypes: JSON
    feedlyId: String
    imageUrl: String
    lastSentAt: String
    publishedAt: String
    publishedAtWithTimeZone: String
    site: String
    summary: String
    summarySentences: JSON
    target: String
    targetId: String
    title: String
    topicLabels: JSON
    updatedAt: String
    url: String
  }

  type Query {
    stories: [Story!]!
  }
`
