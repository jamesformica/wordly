import { useContext, useEffect, useState } from 'react'
import chunk from 'lodash/chunk'
import reject from 'lodash/reject'
import randomSeed from 'random-seed'

import WordlyContext from '../context'

let CACHE = {}

const COLOURS = [
  '#FFB5A5',
  '#F6D0D4',
  '#ABB7BC',
  '#C5D7D2',
  '#619496',
  '#D0F5D8',
  '#FFC999',
  '#708ACC',
  '#FFCBBF',
  '#FEE5AD'
]

const SHAPE_FUNCS = [
  (char, colours) => colours[char % colours.length],
  (_ref, rand) => rand(_ref.current.getBoundingClientRect().width),
  (_ref, rand) => rand(_ref.current.getBoundingClientRect().height),
  rand => rand.intBetween(15, 60),
  rand => rand(4)
]

function useShapeFarm(_ref) {
  const { narative, shape } = useContext(WordlyContext)
  const [shapes, setShapes] = useState([])

  useEffect(() => {
    const charCodes = narative.split('').map(c => c.charCodeAt(0))
    const allCharChunks = chunk(charCodes, SHAPE_FUNCS.length)
    const completeCharChunks = reject(allCharChunks, c => c.length < SHAPE_FUNCS.length)

    const all = completeCharChunks.map((chunk) => {
      const seed = chunk.join('-')

      if (CACHE[seed]) {
        return CACHE[seed]
      }

      const rand = randomSeed.create(seed)

      const one = {
        id: seed,
        colour: SHAPE_FUNCS[0](chunk[0], COLOURS),
        x: SHAPE_FUNCS[1](_ref, rand),
        y: SHAPE_FUNCS[2](_ref, rand),
        size: SHAPE_FUNCS[3](rand),
      }

      CACHE[seed] = one

      return one
    })

    setShapes(all)

    return () => {
      CACHE = {}
    }
  }, [narative, shape])

  return [shapes, shape]
}

export default useShapeFarm
