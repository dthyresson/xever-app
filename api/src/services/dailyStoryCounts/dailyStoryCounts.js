import { queryEndpoint } from 'src/lib/hasuraClient'

export const dailyStoryCounts = async () => {
  const query = `
  {
    dailyStoryCounts: calendar {
      day: date
      value
    }
  }
 `
  const data = await queryEndpoint(query, process.env.HASURA_DOMAIN)

  return data['dailyStoryCounts']
}
