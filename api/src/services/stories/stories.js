import fetch from 'node-fetch'

export const stories = async () => {
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

  const response = await fetch(
    'https://xrinlearning-graphql.herokuapp.com/v1/graphql',
    {
      method: 'post',
      body: JSON.stringify({ query }),
      headers: {
        // 'Content-Type': 'application/json',
        'x-hasura-admin-secret': 's3cr3t',
      },
    }
  )

  const json = await response.json()

  return json['data']['stories']
}
