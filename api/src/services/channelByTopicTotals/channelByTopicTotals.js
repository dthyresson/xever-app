import { request } from 'src/lib/hasuraClient'

export const channelByTopicTotals = async () => {
  const query = `
  {
    channelByTopicTotals: channels_by_topics_totals   {
      totals
    }
  }
 `
  const data = await request(query, process.env.HASURA_DOMAIN)

  return data['channelByTopicTotals']
}
