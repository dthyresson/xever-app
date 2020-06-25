import TopicTag from 'src/components/TopicTag'

const TopicTags = ({ story }) => {
  return story?.topicLabels?.map((topicLabel, index) => (
    <TopicTag
      key={`${story.feedlyId}-topic-${index}`}
      topicLabel={topicLabel}
    />
  ))
}

export default TopicTags
