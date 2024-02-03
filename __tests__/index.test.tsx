/**
 * @jest-environment jsdom
 */
// import { render, screen } from '@testing-library/react'
// import Home from '@/app/page'

// describe('Home', () => {
//   it('renders a heading', () => {
//     render(<Home />)

//     const heading = screen.getByRole('heading', {
//       name: /welcome to next\.js!/i,
//     })

//     expect(heading).toBeInTheDocument()
//   })
// })
import React from 'react'
import { render } from '@testing-library/react'
import Home from '@/app/page'
const { expect, describe, it } = require('@jest/globals')

test('renders "Get Started"', () => {
  const { getByText } = render(<Home />)
  const getStartedText = getByText('Get Started')
  expect(getStartedText).toBeInTheDocument()
})
