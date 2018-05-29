import { get } from 'lodash'

export const getItem = (state) => {
  const items = get(state, 'image.items.logos', [])
  if (items.length === 0) {
    return {
      key: 1001,
      header: 'No Logo Found',
      subtitle: 'Try capturing another logo'
    }
  } else {
    const item = items[0]
    const isHalal = get(item, 'halal.halal_status') === 'halal'

    let subtitle = ''
    if (isHalal) subtitle = 'It is Halal!'
    else subtitle = 'Oops! Not in our Halal List'

    return {
      ...item,
      header: `${item.title}`,
      subtitle,
      isHalal
    }
  }
}
