import { request } from 'src/lib/hasuraClient'

export const dailyStoryCounts = async () => {
  const query = `
  {
    dailyStoryCounts: calendar {
      day: date
      value
    }
  }
 `
  const data = await request(query, process.env.HASURA_DOMAIN)

  return data['dailyStoryCounts']
}
