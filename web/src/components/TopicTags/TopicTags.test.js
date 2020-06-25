import { render } from '@redwoodjs/testing'

import TopicTags from './TopicTags'

describe('TopicTags', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopicTags />)
    }).not.toThrow()
  })
})
