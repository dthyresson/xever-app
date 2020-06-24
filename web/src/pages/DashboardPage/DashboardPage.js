import AppLayout from 'src/layouts/AppLayout'
import { Heading, Stack } from '@chakra-ui/core'

const DashboardPage = () => {
  return (
    <AppLayout>
      <Heading>Dashboard</Heading>
      <Stack alignItems="center" spacing={8}></Stack>
    </AppLayout>
  )
}

export default DashboardPage
