import flatten from 'lodash/flatten'
import remove from 'lodash/remove'
import uniq from 'lodash/uniq'
import { Box } from '@chakra-ui/core'
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap'

export const QUERY = gql`
  query {
    heatMap: channelByTopicTotals {
      totals
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ heatMap }) => {
  const data = heatMap.map((row) => {
    return row['totals']
  })

  const totals = heatMap.map((row) => {
    return Object.keys(row['totals'])
  })

  const indexBy = 'topic'

  const keys = remove(uniq(flatten(totals)), function (item) {
    return item != indexBy
  })

  const height = totals.length * 4

  return (
    <Box height={`${height}rem`} width="100%">
      <ResponsiveHeatMapCanvas
        data={data}
        keys={keys.sort()}
        indexBy={indexBy}
        margin={{ top: 100, left: 100 }}
        forceSquare={true}
        axisTop={{
          orient: 'top',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: '',
          legendOffset: 36,
        }}
        colors="spectral"
        cellOpacity={1}
        cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
        cellShape="circle"
        enableLabels={false}
        sizeVariation={0.5}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
        animate={true}
        motionStiffness={80}
        motionDamping={9}
        hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
      />
    </Box>
  )
}
