import { Text } from '@chakra-ui/core'

const SummarySentences = ({ story }) => {
  return (
    story.summarySentences &&
    story.summarySentences.length > 0 &&
    story.summarySentences[0] &&
    story?.summarySentences?.map((sentence, index) => (
      <Text key={`${story.feedlyId}-${index}`} mb={4}>
        {sentence}
      </Text>
    ))
  )
}

export default SummarySentences
