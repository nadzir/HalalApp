import { get } from 'lodash'
import { isHalalLogo } from '../../lib/halal/halalVerifier'
import { VIEW_HEIGHT, VIEW_WIDTH } from '../../../config/constants/size'
export const getItems = (state) => {
  const logos = get(state, 'image.items.logoAnnotations', [])
  const scaleX = get(state, 'image.scaleX', 1)
  const scaleY = get(state, 'image.scaleY', 1)
  return logos.map((logo, index) => {
    const vertices = logo.boundingPoly.vertices
    const width = (vertices[1].x - vertices[0].x)
    const height = (vertices[2].y - vertices[0].y)
    const diagonal = Math.sqrt(width * width + height * height)
    return {
      key: index + logo.description + scaleX + scaleY,
      description: logo.description,
      isHalal: isHalalLogo(logo.description),
      score: logo.score,
      boundingPoly: logo.boundingPoly.vertices.reduce((acc, vertice) => {
        // const adjustConstantX = 1.4// 1080 / 640
        // const adjustConstantY = 1.6// 1920 / 480
        const x = vertice.x * scaleX
        const y = vertice.y * scaleY
        acc = `${acc} ${x},${y}`
        return acc.trim()
      }, ''),
      cx: vertices[0].x + (width / 2), //* scaleX, // + (width),
      cy: vertices[1].y + (height / 2), //* scaleY, // + (height * 3),
      radius: diagonal, // * 1.2,
      rx: width, // * 1.2,
      ry: height// * 1.2
    }
  })
}

// X : 1.7
// Y: 1.25

// View WIdth : 375 480
// View height: 667 640
