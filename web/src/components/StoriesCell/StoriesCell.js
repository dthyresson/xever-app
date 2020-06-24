import { Box, Image, Link, Stack, Text } from '@chakra-ui/core'
import moment from 'moment'

export const QUERY = gql`
  query {
    stories {
      channelEmojiIcon
      feedlyId
      imageUrl
      url
      summarySentences
      title
      publishedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

const renderSentences = ({ story }) => {
  return story?.summarySentences?.map((sentence, index) => (
    <Text key={`${story.feedlyId}-${index}`} mb={4}>
      {sentence}
    </Text>
  ))
}

const renderStories = ({ stories }) => {
  return stories.map((story) => (
    <Box key={story.id} w="80%">
      <Box borderWidth="1px" rounded="lg" p={4}>
        <Image
          src={story.imageUrl}
          alt={story.title}
          size="240px"
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/240"
          rounded="lg"
          mb={4}
        />
        <Text fontSize="xl" mb={8}>
          {story.channelEmojiIcon}{' '}
          <Link href={story.url} isExternal>
            {story.title}
          </Link>
        </Text>
        {story.summarySentences &&
          story.summarySentences.length > 0 &&
          story.summarySentences[0] &&
          renderSentences({ story })}
        <Text>{moment(story.publishedAt).fromNow()}</Text>
      </Box>
    </Box>
  ))
}

export const Success = ({ stories }) => {
  return (
    <Stack spacing={8} alignItems="center">
      {renderStories({ stories })}
    </Stack>
  )
}
