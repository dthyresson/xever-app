import AppLayout from 'src/layouts/AppLayout'
import { Box, Heading, Image, Text } from '@chakra-ui/core'
import { useAuth } from '@redwoodjs/auth'

const SecretPage = () => {
  const { currentUser, isAuthenticated } = useAuth()

  return (
    <AppLayout>
      <Box>
        <Heading>Secret Page</Heading>

        {isAuthenticated && (
          <Box>
            <Text>You need to be logged in to see your profile:</Text>
            <Text>{currentUser.email}</Text>
            <Image src={currentUser.picture} />
            <Text>{currentUser.email}</Text>
          </Box>
        )}
      </Box>
    </AppLayout>
  )
}

export default SecretPage
