import React, { useContext } from 'react'
import Markdown from 'react-markdown'

import WordlyContext from '../../../../context'

const Narative = () => {
  const { narative } = useContext(WordlyContext)

  return (
    <Markdown source={narative} />
  )
}

export default Narative
