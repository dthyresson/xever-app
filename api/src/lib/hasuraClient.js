import fetch from 'node-fetch'

export const queryEndpoint = async (
  query = {},
  domain = process.env.HASURA_DOMAIN
) => {
  const response = await fetch(`https://${domain}/v1/graphql`, {
    method: 'post',
    body: JSON.stringify({ query }),
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': process.env.HASURA_KEY,
    },
  })

  const json = await response.json()

  return json['data']
}
