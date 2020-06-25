import { render } from '@redwoodjs/testing'

import Story from './Story'

describe('Story', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Story />)
    }).not.toThrow()
  })
})
