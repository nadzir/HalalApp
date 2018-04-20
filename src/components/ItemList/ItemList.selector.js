import { get } from 'lodash'
import { isHalalLogo } from '../../lib/halal/halalVerifier'

export const getItemList = (state) => {
  const logos = get(state, 'image.items.logoAnnotations', [])
  return logos.map(logo => {
    return {
      key: logo.description,
      isHalal: isHalalLogo(logo.description),
      title: logo.description
    }
  })
}
