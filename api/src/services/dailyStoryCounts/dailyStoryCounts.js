import fetch from 'node-fetch'

export const dailyStoryCounts = async () => {
  const query = `
  {
    dailyStoryCounts: calendar {
      day: date
      value
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

  const data = json['data']['dailyStoryCounts']

  return data
}
