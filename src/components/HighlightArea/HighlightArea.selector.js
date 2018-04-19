import { get } from 'lodash'
import { isHalalLogo } from '../../lib/halal/halalVerifier'
export const getItems = (state) => {
  const logos = get(state, 'image.items.logoAnnotations', [])
  return logos.map(logo => {
    const vertices = logo.boundingPoly.vertices
    const width = (vertices[1].x - vertices[0].x)
    const height = (vertices[2].y - vertices[0].y)
    const diagonal = Math.sqrt(width * width + height * height)
    return {
      key: logo.description,
      description: logo.description,
      isHalal: isHalalLogo(logo.description),
      score: logo.score,
      boundingPoly: logo.boundingPoly.vertices.reduce((acc, vertice) => {
        const adjustConstantX = 1.4// 1080 / 640
        const adjustConstantY = 1.6// 1920 / 480
        const x = vertice.x * adjustConstantX
        const y = vertice.y * adjustConstantY
        acc = `${acc} ${x},${y}`
        return acc.trim()
      }, ''),
      cx: vertices[0].x + (width),
      cy: vertices[2].y + (height * 3),
      radius: diagonal * 1.2,
      rx: width * 1.2,
      ry: height * 1.2
    }
  })
}
