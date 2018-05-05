import { get } from 'lodash'

export const getItemList = (state) => {
  const items = get(state, 'image.items.logos', [])
  if (items.length === 0) {
    return items.push({
      key: 9,
      title: 'No Logo Found',
      halal: {
        source: 'Try capturing another logo'
      }

    })
  } else {
    return items.map(item => {
      const halal = item.halal.halal_status ? `(${item.halal.halal_status})` : '(Unknown)'
      return {
        ...item,
        header: `${item.title} ${halal}`
      }
    })
  }
}
