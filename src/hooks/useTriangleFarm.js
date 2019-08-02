import { useContext, useEffect, useState } from 'react'
import chunk from 'lodash/chunk'
import reject from 'lodash/reject'
import randomSeed from 'random-seed'

import WordlyContext from '../context'

let CACHE = {}

const COLOURS = [
  'crimson',
  'midnightblue',
  'goldenrod',
  'black'
]

const TRIANGLE_FUNCS = [
  (char, colours) => colours[char % colours.length],
  (_ref, rand) => rand(_ref.current.getBoundingClientRect().width),
  (_ref, rand) => rand(_ref.current.getBoundingClientRect().height),
  rand => rand.intBetween(6, 30),
  rand => rand(4)
]

function useTriangleFarm(_ref) {
  const { narative } = useContext(WordlyContext)
  const [triangles, setTriangles] = useState([])

  useEffect(() => {
    const charCodes = narative.split('').map(c => c.charCodeAt(0))
    const allCharChunks = chunk(charCodes, TRIANGLE_FUNCS.length)
    const completeCharChunks = reject(allCharChunks, c => c.length < TRIANGLE_FUNCS.length)

    const tris = completeCharChunks.map((chunk) => {
      const seed = chunk.join('-')

      if (CACHE[seed]) {
        return CACHE[seed]
      }

      const rand = randomSeed.create(seed)
      const tri = {
        id: seed,
        colour: TRIANGLE_FUNCS[0](chunk[0], COLOURS),
        x: TRIANGLE_FUNCS[1](_ref, rand),
        y: TRIANGLE_FUNCS[2](_ref, rand),
        size: TRIANGLE_FUNCS[3](rand),
        rotation: 1,
      }

      CACHE[seed] = tri

      return tri
    })

    setTriangles(tris)

    return () => {
      CACHE = {}
    }
  }, [narative])

  return triangles
}

export default useTriangleFarm
