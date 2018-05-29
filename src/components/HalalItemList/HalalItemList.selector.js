import { get } from 'lodash'

export const getItemList = (state) => {
  const items = get(state, 'image.items.logos', [])
  if (items.length === 0) {
    return [{
      key: 1001,
      header: 'No Logo Found',
      subtitle: 'Try capturing another logo'
    }]
  } else {
    return items.map(item => {
      const halalStatus = get(item, 'halal.halal_status')
      // const halal = item.halal.halal_status ? `(${item.halal.halal_status})` : '(Unknown)'
      // const halal = item.halal.halal_status ? `${item.halal.halal_status}` : '(Unknown)'
      let subtitle = ''
      if (halalStatus === 'halal') subtitle = 'It is Halal!'
      else subtitle = 'Oops! Not in our Halal List'
      return {
        ...item,
        header: `${item.title}`,
        subtitle
      }
    })
  }
}
