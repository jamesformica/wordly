import React, { useReducer } from 'react'

import reducer, { DEFAULT_STATE } from '../../reducer'
import WordlyContext from '../../context'
import Art from '../Art/Art'
import Document from '../Document/Document'
import { Wrapper } from './_Styles'

const App = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE)
  const value = { ...state, dispatch }

  return (
    <WordlyContext.Provider value={value}>
      <Wrapper>
        <Document />
        <Art />
      </Wrapper>
    </WordlyContext.Provider>
  )
}

export default App
