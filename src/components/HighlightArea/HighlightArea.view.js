import React from 'react'
import { Svg, Ellipse} from 'react-native-svg'
import { COLOURS } from '../../../config/constants'

export const HighlightArea = ({items}) => {
  // console.log(items)

  const polygonArea = () => {
    const polygons = items.map(item =>
      // <Polygon
      //   points={item.boundingPoly}
      //   fill='lime'
      //   stroke='purple'
      //   strokeWidth='1'
      // />
      <Ellipse
        cx={item.cx}
        cy={item.cy}
        // r={item.radius}
        rx={item.rx}
        ry={item.ry}
        stroke={COLOURS.WHITE}
        strokeWidth='5'
        fill='transparent'
      />
    )
    console.log(polygons)
    return polygons
  }

  return (
    <Svg
      position='absolute'
      height='100%'
      width='100%' >
      {polygonArea()}
    </Svg>
  )
}
