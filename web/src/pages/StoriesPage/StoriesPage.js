import AppLayout from 'src/layouts/AppLayout'
import { Heading, Stack } from '@chakra-ui/core'

const StoriesPage = () => {
  return (
    <AppLayout>
      <Heading>Stories</Heading>
      <Stack alignItems="center" spacing={8}></Stack>
    </AppLayout>
  )
}

export default StoriesPage
