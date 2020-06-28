import { Box } from '@chakra-ui/core'
import { ResponsiveCalendar } from '@nivo/calendar'

export const QUERY = gql`
  query {
    dailyStoryCounts {
      day
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ dailyStoryCounts }) => {
  console.log(' >> in Success (calendar)')

  console.log(process.env.AUTH0_DOMAIN)
  console.log(process.env.AUTH0_CLIENT_ID)

  const firstDay = dailyStoryCounts[0].day
  const lastDay = dailyStoryCounts[dailyStoryCounts.length - 1].day

  return (
    <Box height="600px" width="100%">
      <ResponsiveCalendar
        data={dailyStoryCounts}
        from={firstDay}
        to={lastDay}
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
  )
}
