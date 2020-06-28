import { Button } from '@chakra-ui/core'
import { useAuth } from '@redwoodjs/auth'

const UserAuthTools = () => {
  const { loading, isAuthenticated, logIn, logOut } = useAuth()

  if (loading) {
    // auth is rehydrating
    return null
  }

  return (
    <Button
      onClick={
        isAuthenticated
          ? logOut({ returnTo: process.env.AUTH0_REDIRECT_URI })
          : logIn
      }
    >
      {isAuthenticated ? 'Log out' : 'Log in'}
    </Button>
  )
}

export default UserAuthTools
