import React, { useRef, useEffect } from 'react'

import useShapeFarm from '../../hooks/useShapeFarm'
import Circle from './components/Circle/Circle'
import Square from './components/Square/Square'
import Triangle from './components/Triangle/Triangle'
import { Wrapper } from './_Styles'

const SHAPE_MAPPING = {
  'circle': Circle,
  'triangle': Triangle,
  'square': Square,
}

const Art = () => {
  const _canvas = useRef()
  const [shapes, shape] = useShapeFarm(_canvas)

  const Shape = SHAPE_MAPPING[shape]

  useEffect(() => {
    const { width, height } = _canvas.current.getBoundingClientRect()
    _canvas.current.style.width = `${width}px`
    _canvas.current.style.height = `${height}px`
  })

  return (
    <Wrapper ref={_canvas}>
      {shapes.map((t, i) => <Shape key={`${t.id}-${i}`} {...t} />)}
    </Wrapper>
  )
}

export default Art
