import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'
import importAll from '@redwoodjs/api/importAll.macro'

import { getCurrentUser } from 'src/lib/auth.js'
import { db } from 'src/lib/db'

const schemas = importAll('api', 'graphql')
const services = importAll('api', 'services')

const wrapHandler = (handler) => {
  return handler
}

export const handler = wrapHandler(
  createGraphQLHandler({
    schema: makeMergedSchema({
      schemas,
      services: makeServices({ services }),
    }),
    db,
    async context({ event, context }) {
      console.log(`>> event: ${JSON.stringify(event)}`)
      console.log(`>> context: ${JSON.stringify(context)}`)
      const accessToken = event.headers?.authorization?.split(' ')?.[1]
      console.log(`>> accessToken: ${accessToken}`)
      const jwt = context.currentUser
      console.log(`>> jwt: ${jwt}`)
      const currentUser = await getCurrentUser(jwt, accessToken)

      return {
        ...context,
        accessToken,
        currentUser,
      }
    },
  })
)
