import React from 'react'
import { Svg, Ellipse } from 'react-native-svg'
import { COLOURS } from '../../../config/constants'
import { VIEW_HEIGHT, VIEW_WIDTH } from '../../../config/constants/size'

export const HighlightArea = ({items}) => {
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
      // top={80}
      height={VIEW_HEIGHT}
      width={VIEW_WIDTH} >
      {polygonArea()}
    </Svg>
  )
}
