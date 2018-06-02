import { get } from 'lodash'

export const getCurrentItem = (state) => {
  const items = get(state, 'image.items.logos', [])
  if (items.length === 0) {
    return {
      key: 1001,
      header: 'No Logo Found',
      subtitle: 'Try capturing another logo'
    }
  } else {
    const item = items[0]
    return {
      ...item
    }
  }
}

export const getDbItems = (state) => {
  return get(state, 'items.db')
}
