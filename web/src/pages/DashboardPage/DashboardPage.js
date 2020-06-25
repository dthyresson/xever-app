import AppLayout from 'src/layouts/AppLayout'
import { Heading, Stack } from '@chakra-ui/core'
import StoryCalendarCell from 'src/components/StoryCalendarCell'
import TopicByChannelHeatMapCell from 'src/components/TopicByChannelHeatMapCell'

const DashboardPage = () => {
  return (
    <AppLayout>
      <Heading>Dashboard</Heading>
      <Stack align="center" spacing={8} width="100%">
        <TopicByChannelHeatMapCell></TopicByChannelHeatMapCell>
        <StoryCalendarCell></StoryCalendarCell>
      </Stack>
    </AppLayout>
  )
}

export default DashboardPage
