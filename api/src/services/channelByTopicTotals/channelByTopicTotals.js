import fetch from 'node-fetch'

export const channelByTopicTotals = async () => {
  const query = `
  {
    channelByTopicTotals: channels_by_topics_totals   {
      totals
    }
  }
 `

  const response = await fetch(
    'https://xrinlearning-graphql.herokuapp.com/v1/graphql',
    {
      method: 'post',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': process.env.HASURA_KEY,
      },
    }
  )

  const json = await response.json()

  const data = json['data']['channelByTopicTotals']

  return data
}
