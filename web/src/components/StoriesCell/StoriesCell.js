import { Stack } from '@chakra-ui/core'
import Story from 'src/components/Story'

export const QUERY = gql`
  query {
    stories {
      author
      channelEmojiIcon
      channelName
      feedlyId
      imageUrl
      publishedAt
      site
      summarySentences
      title
      topicLabels
      url
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

const Stories = ({ stories }) => {
  return stories.map((story, index) => (
    <Story key={`${story.id}-${story.channelName}-${index}`} story={story} />
  ))
}

export const Success = ({ stories }) => {
  return (
    <Stack spacing={8} alignItems="center">
      <Stories stories={stories} />
    </Stack>
  )
}
