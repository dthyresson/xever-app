// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const getCurrentUser = async ({ email }) => {
//     return await db.user.findOne({ where: { email } })
//   }
import { AuthenticationClient } from 'auth0'
import { AuthenticationError } from '@redwoodjs/api'

import { db } from 'src/lib/db'

const auth0 = new AuthenticationClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
})

export const getCurrentUser = async (jwt, accessToken) => {
  console.log('>> getCurrentUser')
  console.log(jwt)

  if (!jwt?.sub) {
    return jwt
  }

  let user = await db.user.findOne({
    where: {
      userId: jwt.sub,
    },
  })

  console.log('>> got User')
  console.log(user)
  console.log(accessToken)

  if (!user && accessToken) {
    console.log('>> fetching getProfile')
    const auth0User = await auth0.getProfile(accessToken)

    console.log(auth0User)

    console.log('>> creating user with ...')

    const userData = {
      // createdAt: auth0User.createdAt,
      // updatedAt: auth0User.updatedAt,
      email: auth0User.email,
      emailVerified: auth0User.emailVerified,
      lastIp: auth0User.lastIp,
      lastLogin: auth0User.lastLogin,
      loginsCount: auth0User.loginsCount,
      name: auth0User.name,
      nickname: auth0User.nickname,
      picture: auth0User.picture,
      userId: auth0User.sub,
    }

    console.log(userData)

    user = await db.user.create({
      data: userData,
    })

    console.log(user)

    return user
  }
  return jwt
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
