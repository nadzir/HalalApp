import { get } from 'lodash'
export const getItems = (state) => {
  const logos = get(state, 'image.items.logos', [])
  const scaleX = get(state, 'image.scaleX', 1)
  const scaleY = get(state, 'image.scaleY', 1)
  return logos.map((logo, index) => {
    const vertices = logo.boundingPoly.vertices
    const width = (vertices[1].x - vertices[0].x)
    const height = (vertices[2].y - vertices[0].y)
    const diagonal = Math.sqrt(width * width + height * height)
    return {
      ...logo,
      boundingPoly: logo.boundingPoly.vertices.reduce((acc, vertice) => {
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
