import { render } from '@redwoodjs/testing'

import StoriesPage from './StoriesPage'

describe('StoriesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StoriesPage />)
    }).not.toThrow()
  })
})
