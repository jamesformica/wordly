import React, { useRef } from 'react'

import useTriangeFarm from '../../hooks/useTriangleFarm'
import Triangle from './components/Triangle/Triangle'
import { Wrapper } from './_Styles'

const Art = () => {
  const _canvas = useRef()
  const triangles = useTriangeFarm(_canvas)

  return (
    <Wrapper ref={_canvas}>
      {triangles.map((t, i) => <Triangle key={`${t.id}-${i}`} {...t} />)}
    </Wrapper>
  )
}

export default Art
