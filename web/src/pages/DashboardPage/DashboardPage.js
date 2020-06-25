import AppLayout from 'src/layouts/AppLayout'
import { Box, Heading, Stack } from '@chakra-ui/core'
import { ResponsiveHeatMap } from '@nivo/heatmap'

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
const DashboardPage = () => {
  return (
    <AppLayout>
      <Heading>Dashboard</Heading>
      <Stack alignItems="center" spacing={8} width="80%">
        <Box height="3000px" width="100%">
          <ResponsiveHeatMap
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
            margin={{ top: 100, left: 400 }}
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
      </Stack>
    </AppLayout>
  )
}

export default DashboardPage
