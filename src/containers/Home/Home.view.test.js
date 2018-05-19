import React from 'react'
import { HomeView } from '../Home'

import renderer from 'react-test-renderer'

jest.mock('../../analytics', () => {
  return {
    analytics: {
      trackScreenView: () => {}
    }
  }
})

test('renders correctly', () => {
  const tree = renderer.create(<HomeView />).toJSON()
  expect(tree).toMatchSnapshot()
})
