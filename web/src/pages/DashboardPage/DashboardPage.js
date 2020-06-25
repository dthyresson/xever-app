import AppLayout from 'src/layouts/AppLayout'
import { Box, Heading, Stack } from '@chakra-ui/core'
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap'
import { ResponsiveCalendar } from '@nivo/calendar'

const data = [
  {
    topic: '70/20/10 Model (Learning and Development)',
    'Pop Culture': 1,
  },
  {
    topic: 'Active learning',
    Aerospace: 2,
    Transportation: 2,
  },
  {
    topic: 'Augmented learning',
    Aerospace: 4,
    Transportation: 4,
  },
  {
    Music: 316,
    topic: 'Augmented reality',
    Sports: 476,
    Military: 126,
    Aerospace: 257,
    'Pop Culture': 240,
    Transportation: 1099,
  },
  {
    topic: 'Augmented reality applications',
    'Pop Culture': 4,
  },
  {
    topic: 'Blended learning',
    Sports: 13,
    Military: 1,
    'Pop Culture': 2,
  },
  {
    topic: 'Cave automatic virtual environment',
    Aerospace: 2,
    'Pop Culture': 2,
    Transportation: 3,
  },
  {
    topic: 'Collaborative learning',
    Aerospace: 2,
    Transportation: 2,
  },
  {
    topic: 'Computer-supported collaborative learning',
    Sports: 1,
  },
  {
    topic: 'Decision tree learning',
    Military: 1,
    'Pop Culture': 2,
  },
  {
    Music: 8,
    topic: 'Deep learning',
    Sports: 5,
    Military: 3,
    Aerospace: 10,
    'Pop Culture': 5,
    Transportation: 16,
  },
  {
    topic: 'E-learning',
    'Pop Culture': 1,
  },
  {
    topic: 'E-learning (theory)',
    Military: 1,
  },
  {
    topic: 'English-language learner',
    Sports: 10,
  },
  {
    Music: 1,
    topic: 'EON Reality',
    Military: 2,
    Aerospace: 5,
    Transportation: 12,
  },
  {
    Music: 2,
    topic: 'Experiential learning',
    Military: 23,
    Aerospace: 8,
    Transportation: 32,
  },
  {
    Music: 1,
    topic: 'Hyperreality',
    Aerospace: 4,
    'Pop Culture': 1,
    Transportation: 4,
  },
  {
    Music: 68,
    topic: 'Immersion (virtual reality)',
    Sports: 91,
    Military: 36,
    Aerospace: 75,
    'Pop Culture': 31,
    Transportation: 146,
  },
  {
    topic: 'Industrial augmented reality',
    Transportation: 6,
  },
  {
    Music: 274,
    topic: 'Learning',
    Sports: 228,
    Military: 247,
    Aerospace: 196,
    'Pop Culture': 116,
    Transportation: 415,
  },
  {
    topic: 'Learning analytics',
    Aerospace: 6,
    Transportation: 6,
  },
  {
    Music: 26,
    topic: 'Learning curve',
    Sports: 8,
    'Pop Culture': 8,
    Transportation: 2,
  },
  {
    topic: 'Learning disability',
    Aerospace: 2,
    Transportation: 2,
  },
  {
    Music: 5,
    topic: 'Learning environment',
    Military: 10,
    Aerospace: 4,
    Transportation: 16,
  },
  {
    topic: 'Learning management system',
    Military: 2,
    'Pop Culture': 2,
    Transportation: 6,
  },
  {
    topic: 'Learning methods',
    Military: 1,
    Aerospace: 2,
    'Pop Culture': 3,
    Transportation: 2,
  },
  {
    topic: 'Learning styles',
    'Pop Culture': 2,
  },
  {
    topic: 'Learning theory (education)',
    Sports: 10,
    Transportation: 3,
  },
  {
    topic: 'Lifelong learning',
    Aerospace: 2,
    Transportation: 2,
  },
  {
    Music: 52,
    topic: 'Machine learning',
    Sports: 78,
    Military: 17,
    Aerospace: 55,
    'Pop Culture': 28,
    Transportation: 78,
  },
  {
    topic: 'Mixed reality games',
    'Pop Culture': 1,
  },
  {
    topic: 'M-learning',
    Aerospace: 2,
    'Pop Culture': 1,
    Transportation: 2,
  },
  {
    topic: 'Observational learning',
    'Pop Culture': 1,
  },
  {
    topic: 'Peer learning',
    Military: 1,
  },
  {
    topic: 'Personalized learning',
    Military: 1,
    'Pop Culture': 1,
  },
  {
    topic: 'Project-based learning',
    Sports: 2,
    Aerospace: 2,
    Transportation: 2,
  },
  {
    topic: 'Psychomotor learning',
    Military: 1,
  },
  {
    Music: 4,
    topic: 'Reality film',
    Sports: 1,
  },
  {
    Music: 1,
    topic: 'Reality music competition television series',
  },
  {
    Music: 16,
    topic: 'Reality therapy',
    Military: 1,
    Aerospace: 3,
    Transportation: 3,
  },
  {
    topic: 'Reality–virtuality continuum',
    Sports: 1,
  },
  {
    topic: 'Rick and Morty: Virtual Rick-ality',
    Sports: 1,
    'Pop Culture': 1,
    Transportation: 1,
  },
  {
    Music: 1,
    topic: 'Simulated reality',
    Aerospace: 4,
    Transportation: 4,
  },
  {
    Music: 2,
    topic: 'The Void (virtual reality)',
    Sports: 1,
  },
  {
    Music: 6,
    topic: 'Virtual art',
    'Pop Culture': 3,
  },
  {
    Music: 4,
    topic: 'Virtual Boy',
    Sports: 3,
    Aerospace: 2,
    'Pop Culture': 2,
    Transportation: 2,
  },
  {
    topic: 'Virtual camera system',
    Sports: 5,
    Aerospace: 5,
    'Pop Culture': 6,
    Transportation: 6,
  },
  {
    Music: 13,
    topic: 'Virtual communities',
    Sports: 24,
    Military: 1,
    Aerospace: 4,
    'Pop Culture': 7,
    Transportation: 10,
  },
  {
    Music: 5,
    topic: 'Virtual community',
    'Pop Culture': 4,
  },
  {
    Music: 8,
    topic: 'Virtual concert',
  },
  {
    Music: 3,
    topic: 'Virtual desktop',
    Sports: 3,
    Aerospace: 2,
    'Pop Culture': 3,
    Transportation: 2,
  },
  {
    Music: 3,
    topic: 'Virtual event',
    Sports: 6,
    Aerospace: 2,
    'Pop Culture': 3,
    Transportation: 4,
  },
  {
    Music: 18,
    topic: 'Virtual goods',
    Sports: 4,
    'Pop Culture': 5,
  },
  {
    topic: 'Virtual Human Interaction Lab',
    Sports: 10,
    Transportation: 4,
  },
  {
    Music: 1,
    topic: 'Virtualization',
    Military: 1,
    'Pop Culture': 3,
  },
  {
    Music: 9,
    topic: 'Virtual keyboard',
    Sports: 3,
    Aerospace: 2,
    Transportation: 4,
  },
  {
    topic: 'Virtual learning environment',
    Aerospace: 2,
    Transportation: 2,
  },
  {
    topic: 'Virtual learning environments',
    'Pop Culture': 1,
  },
  {
    Music: 4,
    topic: 'Virtual Light',
    Sports: 2,
    Military: 1,
    Aerospace: 2,
    Transportation: 2,
  },
  {
    topic: 'Virtual memory',
    Military: 1,
  },
  {
    topic: 'Virtual museum',
    Aerospace: 8,
    'Pop Culture': 1,
    Transportation: 11,
  },
  {
    Music: 5,
    topic: 'Virtual office',
    Sports: 2,
    Aerospace: 7,
    'Pop Culture': 5,
    Transportation: 9,
  },
  {
    Music: 5,
    topic: 'Virtual pets',
    Sports: 1,
    Military: 1,
    Aerospace: 2,
    'Pop Culture': 4,
    Transportation: 2,
  },
  {
    Music: 2,
    topic: 'Virtual private network',
    Sports: 32,
    Aerospace: 2,
    'Pop Culture': 2,
    Transportation: 2,
  },
  {
    Music: 16,
    topic: 'Virtual reality applications',
    Sports: 2,
    Military: 1,
    Aerospace: 9,
    Transportation: 10,
  },
  {
    Music: 2,
    topic: 'Virtual reality communities',
    'Pop Culture': 1,
  },
  {
    Music: 108,
    topic: 'Virtual reality companies',
    Sports: 48,
    Military: 4,
    Aerospace: 26,
    'Pop Culture': 41,
    Transportation: 26,
  },
  {
    Music: 8,
    topic: 'Virtual reality games',
    Sports: 4,
    Aerospace: 6,
    'Pop Culture': 4,
    Transportation: 7,
  },
  {
    Music: 129,
    topic: 'Virtual reality headsets',
    Sports: 104,
    Military: 8,
    Aerospace: 52,
    'Pop Culture': 61,
    Transportation: 68,
  },
  {
    Music: 18,
    topic: 'Virtual reality therapy',
    Military: 1,
    Aerospace: 3,
    Transportation: 3,
  },
  {
    Music: 2,
    topic: 'Virtual reality works',
    Sports: 1,
    Aerospace: 4,
    'Pop Culture': 3,
    Transportation: 5,
  },
  {
    Music: 1,
    topic: 'Virtual studio',
  },
  {
    topic: 'Virtual team',
    Sports: 1,
    'Pop Culture': 3,
  },
  {
    Music: 12,
    topic: 'Virtual tour',
    Sports: 18,
    Military: 128,
    Aerospace: 31,
    'Pop Culture': 3,
    Transportation: 122,
  },
  {
    Music: 2,
    topic: 'Virtual water',
  },
  {
    Music: 1,
    topic: 'Virtual work',
    Transportation: 4,
  },
  {
    topic: 'Virtual workplace',
    Aerospace: 2,
    'Pop Culture': 5,
    Transportation: 2,
  },
  {
    Music: 219,
    topic: 'Virtual world',
    Sports: 78,
    Military: 21,
    Aerospace: 100,
    'Pop Culture': 73,
    Transportation: 146,
  },
  {
    Music: 4,
    topic: 'Virtual YouTuber',
    'Pop Culture': 4,
  },
  {
    topic: 'Visual learning',
    Sports: 1,
  },
  {
    topic: 'Vuforia Augmented Reality SDK',
    Sports: 26,
    Aerospace: 2,
    'Pop Culture': 3,
    Transportation: 2,
  },
  {
    Music: 20,
    topic: 'Windows Mixed Reality',
    Sports: 10,
    Military: 1,
    Aerospace: 5,
    'Pop Culture': 5,
    Transportation: 5,
  },
]

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
        <Box height="3000px" width="100%" bg="white">
          <ResponsiveHeatMapCanvas
            data={data}
            keys={[
              'Aerospace',
              'Military',
              'Music',
              'Pop Culture',
              'Sports',
              'Transportation',
            ]}
            indexBy="topic"
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
