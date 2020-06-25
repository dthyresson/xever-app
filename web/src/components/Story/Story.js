import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  Tooltip,
} from '@chakra-ui/core'
import moment from 'moment'
import TopicTags from 'src/components/TopicTags'
import SummarySentences from 'src/components/SummarySentences'

const Story = ({ story }) => {
  return (
    <Box w="50%">
      <Box
        borderWidth="1px"
        rounded="lg"
        p={4}
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
      >
        <Image
          src={story.imageUrl}
          alt={story.title}
          size="100%"
          maxH="240px"
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/120"
          rounded="lg"
          mb={2}
        />
        <Flex justify="space-between" mb={2}>
          <Flex align="left">
            <Text fontSize="xs" color="gray.400">
              {story.author}
            </Text>
          </Flex>
          <Flex align="right">
            <Text fontSize="xs" color="gray.400">
              {story.site}
            </Text>
          </Flex>
        </Flex>
        <Heading as="h3" size="lg" fontWeight="bold" mb={8}>
          <Link href={story.url} isExternal>
            {story.title}
          </Link>
        </Heading>
        <Heading as="h4" color="gray.700" size="xs" mb={2}>
          Highlights
        </Heading>
        <SummarySentences story={story} />
        <Flex
          mb={4}
          spacing={2}
          wrap="wrap"
          align="space-between"
          justify="center"
        >
          <TopicTags story={story} />
        </Flex>
        <Flex justify="space-between">
          <Flex align="center">
            <Tooltip label={story.channelName} hasArrow>
              <Text>{story.channelEmojiIcon}</Text>
            </Tooltip>
          </Flex>
          <Flex align="center">
            <Icon name="time" size="13px" mr={1} color="black" />
            <Tooltip
              label={moment(story.publishedAt).format(
                'dddd, MMMM Do YYYY, h:mm a'
              )}
              hasArrow
            >
              <Text fontSize="sm">{moment(story.publishedAt).fromNow()}</Text>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Story
