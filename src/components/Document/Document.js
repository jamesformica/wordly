import React, { useContext } from 'react'

import WordlyContext from '../../context'
import Edit from './components/Edit/Edit'
import Title from './components/Title/Title'
import Editor from './components/Editor/Editor'
import Narative from './components/Narative/Narative'
import { Wrapper } from './_Styles'

const Document = () => {
  const { isEditing } = useContext(WordlyContext)

  return (
    <Wrapper>
      <Edit />
      <Title />
      {isEditing ? <Editor /> : <Narative />}
    </Wrapper>
  )
}

export default Document
