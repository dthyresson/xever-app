import { requireAuth } from 'src/lib/auth.js'
import { queryEndpoint } from 'src/lib/hasuraClient'

export const stories = async () => {
  requireAuth()

  const query = `
  {
    stories {
      author
      categories
      categoryGroup
      channelEmojiIcon
      channelId
      channelName
      companyNames
      conceptEmojiIcons
      conceptNames
      conceptRuleEmojiIcons
      createdAt
      engagement
      engagementRate
      entityTypes
      feedlyId
      imageUrl
      lastSentAt
      publishedAt
      publishedAtWithTimeZone
      site
      summary
      summarySentences
      target
      targetId
      title
      topicLabels
      updatedAt
      url
    }
  }
 `
  const data = await queryEndpoint(query, process.env.HASURA_DOMAIN)

  return data['stories']
}
