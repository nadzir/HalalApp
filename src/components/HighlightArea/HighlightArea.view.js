import React from 'react'
import { Svg, Ellipse } from 'react-native-svg'
import { COLOURS } from '../../../config/constants'

export const HighlightArea = ({items}) => {
  // console.log(items)

  const polygonArea = () => {
    return items.map(item =>
      <Ellipse
        key={item.key}
        cx={item.cx}
        cy={item.cy}
        // r={item.radius}
        rx={item.rx}
        ry={item.ry}
        stroke={item.isHalal ? COLOURS.HALAL : COLOURS.WHITE}
        strokeWidth='5'
        fill='transparent'
      />
    )
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
