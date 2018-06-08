import React from 'react'
import { HomeView } from '../Home'

import renderer from 'react-test-renderer'

jest.mock('../../analytics', () => {
  return {
    analytics: {
      logEvent: () => {},
      setCurrentScreen: () => {}
    }
  }
})

test('renders correctly', () => {
  const tree = renderer.create(<HomeView />).toJSON()
  expect(tree).toMatchSnapshot()
})
