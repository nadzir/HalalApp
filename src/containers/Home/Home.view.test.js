import React from 'react'
import HomeView from './HomeView'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(<HomeView />).toJSON()
  expect(tree).toMatchSnapshot()
})
