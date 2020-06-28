import { GraphQLClient } from 'graphql-request'

export const request = async (
  query = {},
  domain = process.env.HASURA_DOMAIN
) => {
  const endpoint = `https://${domain}/v1/graphql`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_KEY,
    },
  })

  try {
    return await graphQLClient.request(query)
  } catch (error) {
    console.log(error)
    return error
  }
}
