import AppLayout from 'src/layouts/AppLayout'
import { Heading } from '@chakra-ui/core'
import StoriesCell from 'src/components/StoriesCell'

const StoriesPage = () => {
  return (
    <AppLayout>
      <Heading>Stories</Heading>
      <StoriesCell />
    </AppLayout>
  )
}

export default StoriesPage
