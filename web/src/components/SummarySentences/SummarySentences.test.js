import { render } from '@redwoodjs/testing'

import SummarySentences from './SummarySentences'

describe('SummarySentences', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SummarySentences />)
    }).not.toThrow()
  })
})
