import AppLayout from 'src/layouts/AppLayout'
import { Box, Heading, Stack } from '@chakra-ui/core'
import { ResponsiveCalendar } from '@nivo/calendar'
import TopicByChannelHeatMapCell from 'src/components/TopicByChannelHeatMapCell'

const calendarData = [
  {
    day: '2020-01-03',
    value: 1,
  },
  {
    day: '2020-01-10',
    value: 1,
  },
  {
    day: '2020-01-14',
    value: 2,
  },
  {
    day: '2020-01-15',
    value: 1,
  },
  {
    day: '2020-01-16',
    value: 1,
  },
  {
    day: '2020-01-23',
    value: 1,
  },
  {
    day: '2020-01-24',
    value: 1,
  },
  {
    day: '2020-01-25',
    value: 1,
  },
  {
    day: '2020-01-29',
    value: 2,
  },
  {
    day: '2020-01-30',
    value: 1,
  },
  {
    day: '2020-01-31',
    value: 1,
  },
  {
    day: '2020-02-01',
    value: 2,
  },
  {
    day: '2020-02-02',
    value: 1,
  },
  {
    day: '2020-02-03',
    value: 2,
  },
  {
    day: '2020-02-04',
    value: 7,
  },
  {
    day: '2020-02-05',
    value: 10,
  },
  {
    day: '2020-02-06',
    value: 11,
  },
  {
    day: '2020-02-07',
    value: 10,
  },
  {
    day: '2020-02-08',
    value: 2,
  },
  {
    day: '2020-02-09',
    value: 4,
  },
  {
    day: '2020-02-10',
    value: 13,
  },
  {
    day: '2020-02-11',
    value: 20,
  },
  {
    day: '2020-02-12',
    value: 14,
  },
  {
    day: '2020-02-13',
    value: 10,
  },
  {
    day: '2020-02-14',
    value: 16,
  },
  {
    day: '2020-02-15',
    value: 1,
  },
  {
    day: '2020-02-16',
    value: 4,
  },
  {
    day: '2020-02-17',
    value: 17,
  },
  {
    day: '2020-02-18',
    value: 8,
  },
  {
    day: '2020-02-19',
    value: 12,
  },
  {
    day: '2020-02-20',
    value: 11,
  },
  {
    day: '2020-02-21',
    value: 6,
  },
  {
    day: '2020-02-22',
    value: 2,
  },
  {
    day: '2020-02-23',
    value: 5,
  },
  {
    day: '2020-02-24',
    value: 9,
  },
  {
    day: '2020-02-25',
    value: 11,
  },
  {
    day: '2020-02-26',
    value: 13,
  },
  {
    day: '2020-02-27',
    value: 13,
  },
  {
    day: '2020-02-28',
    value: 9,
  },
  {
    day: '2020-02-29',
    value: 5,
  },
  {
    day: '2020-03-01',
    value: 3,
  },
  {
    day: '2020-03-02',
    value: 11,
  },
  {
    day: '2020-03-03',
    value: 7,
  },
  {
    day: '2020-03-04',
    value: 15,
  },
  {
    day: '2020-03-05',
    value: 8,
  },
  {
    day: '2020-03-06',
    value: 5,
  },
  {
    day: '2020-03-09',
    value: 2,
  },
  {
    day: '2020-03-10',
    value: 4,
  },
  {
    day: '2020-03-11',
    value: 8,
  },
  {
    day: '2020-03-12',
    value: 13,
  },
  {
    day: '2020-03-13',
    value: 6,
  },
  {
    day: '2020-03-14',
    value: 3,
  },
  {
    day: '2020-03-15',
    value: 2,
  },
  {
    day: '2020-03-16',
    value: 9,
  },
  {
    day: '2020-03-17',
    value: 16,
  },
  {
    day: '2020-03-18',
    value: 13,
  },
  {
    day: '2020-03-19',
    value: 14,
  },
  {
    day: '2020-03-20',
    value: 7,
  },
  {
    day: '2020-03-21',
    value: 3,
  },
  {
    day: '2020-03-22',
    value: 3,
  },
  {
    day: '2020-03-23',
    value: 7,
  },
  {
    day: '2020-03-24',
    value: 14,
  },
  {
    day: '2020-03-25',
    value: 11,
  },
  {
    day: '2020-03-26',
    value: 22,
  },
  {
    day: '2020-03-27',
    value: 10,
  },
  {
    day: '2020-03-28',
    value: 1,
  },
  {
    day: '2020-03-29',
    value: 3,
  },
  {
    day: '2020-03-30',
    value: 16,
  },
  {
    day: '2020-03-31',
    value: 22,
  },
  {
    day: '2020-04-01',
    value: 11,
  },
  {
    day: '2020-04-02',
    value: 13,
  },
  {
    day: '2020-04-03',
    value: 9,
  },
  {
    day: '2020-04-04',
    value: 5,
  },
  {
    day: '2020-04-05',
    value: 5,
  },
  {
    day: '2020-04-06',
    value: 11,
  },
  {
    day: '2020-04-07',
    value: 6,
  },
  {
    day: '2020-04-08',
    value: 5,
  },
  {
    day: '2020-04-09',
    value: 21,
  },
  {
    day: '2020-04-10',
    value: 4,
  },
  {
    day: '2020-04-12',
    value: 7,
  },
  {
    day: '2020-04-13',
    value: 13,
  },
  {
    day: '2020-04-14',
    value: 10,
  },
  {
    day: '2020-04-15',
    value: 3,
  },
  {
    day: '2020-04-16',
    value: 8,
  },
  {
    day: '2020-04-17',
    value: 3,
  },
  {
    day: '2020-04-18',
    value: 1,
  },
  {
    day: '2020-04-19',
    value: 1,
  },
  {
    day: '2020-04-21',
    value: 1,
  },
  {
    day: '2020-04-23',
    value: 12,
  },
  {
    day: '2020-04-24',
    value: 13,
  },
  {
    day: '2020-04-25',
    value: 10,
  },
  {
    day: '2020-04-26',
    value: 6,
  },
  {
    day: '2020-04-27',
    value: 20,
  },
  {
    day: '2020-04-28',
    value: 17,
  },
  {
    day: '2020-04-29',
    value: 21,
  },
  {
    day: '2020-04-30',
    value: 15,
  },
  {
    day: '2020-05-01',
    value: 17,
  },
  {
    day: '2020-05-02',
    value: 9,
  },
  {
    day: '2020-05-03',
    value: 12,
  },
  {
    day: '2020-05-04',
    value: 17,
  },
  {
    day: '2020-05-05',
    value: 19,
  },
  {
    day: '2020-05-06',
    value: 17,
  },
  {
    day: '2020-05-07',
    value: 15,
  },
  {
    day: '2020-05-08',
    value: 11,
  },
  {
    day: '2020-05-09',
    value: 1,
  },
  {
    day: '2020-05-11',
    value: 20,
  },
  {
    day: '2020-05-12',
    value: 18,
  },
  {
    day: '2020-05-13',
    value: 17,
  },
  {
    day: '2020-05-14',
    value: 12,
  },
  {
    day: '2020-05-15',
    value: 10,
  },
  {
    day: '2020-05-16',
    value: 6,
  },
  {
    day: '2020-05-17',
    value: 6,
  },
  {
    day: '2020-05-18',
    value: 16,
  },
  {
    day: '2020-05-19',
    value: 17,
  },
  {
    day: '2020-05-20',
    value: 10,
  },
  {
    day: '2020-05-21',
    value: 11,
  },
  {
    day: '2020-05-22',
    value: 19,
  },
  {
    day: '2020-05-23',
    value: 5,
  },
  {
    day: '2020-05-24',
    value: 5,
  },
  {
    day: '2020-05-25',
    value: 3,
  },
  {
    day: '2020-05-26',
    value: 23,
  },
  {
    day: '2020-05-27',
    value: 21,
  },
  {
    day: '2020-05-29',
    value: 1,
  },
  {
    day: '2020-05-30',
    value: 2,
  },
  {
    day: '2020-05-31',
    value: 5,
  },
  {
    day: '2020-06-01',
    value: 19,
  },
  {
    day: '2020-06-02',
    value: 8,
  },
  {
    day: '2020-06-03',
    value: 3,
  },
  {
    day: '2020-06-04',
    value: 1,
  },
  {
    day: '2020-06-05',
    value: 14,
  },
  {
    day: '2020-06-06',
    value: 5,
  },
  {
    day: '2020-06-07',
    value: 5,
  },
  {
    day: '2020-06-08',
    value: 18,
  },
  {
    day: '2020-06-09',
    value: 10,
  },
  {
    day: '2020-06-10',
    value: 18,
  },
  {
    day: '2020-06-11',
    value: 16,
  },
  {
    day: '2020-06-12',
    value: 11,
  },
  {
    day: '2020-06-13',
    value: 2,
  },
  {
    day: '2020-06-14',
    value: 2,
  },
  {
    day: '2020-06-15',
    value: 14,
  },
  {
    day: '2020-06-16',
    value: 16,
  },
  {
    day: '2020-06-17',
    value: 13,
  },
  {
    day: '2020-06-18',
    value: 13,
  },
  {
    day: '2020-06-19',
    value: 18,
  },
  {
    day: '2020-06-20',
    value: 2,
  },
  {
    day: '2020-06-21',
    value: 2,
  },
  {
    day: '2020-06-22',
    value: 15,
  },
  {
    day: '2020-06-23',
    value: 14,
  },
  {
    day: '2020-06-24',
    value: 8,
  },
]

const DashboardPage = () => {
  return (
    <AppLayout>
      <Heading>Dashboard</Heading>
      <Stack align="center" spacing={8} width="100%">
        <TopicByChannelHeatMapCell></TopicByChannelHeatMapCell>

        <Box height="600px" width="100%">
          <ResponsiveCalendar
            data={calendarData}
            from="2020-01-02"
            to="2020-07-12"
            emptyColor="#eeeeee"
            colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left',
              },
            ]}
          />
        </Box>
      </Stack>
    </AppLayout>
  )
}

export default DashboardPage
