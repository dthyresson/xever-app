import { render } from '@redwoodjs/testing'

import TopicTag from './TopicTag'

describe('TopicTag', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopicTag />)
    }).not.toThrow()
  })
})
