import { Tag, TagLabel } from '@chakra-ui/core'

const TopicTag = ({ topicLabel }) => {
  return (
    <Tag size="sm" variantColor="gray" variant="subtle" m={1}>
      <TagLabel>{topicLabel}</TagLabel>
    </Tag>
  )
}

export default TopicTag
