import React, { useContext } from 'react'

import WordlyContext from '../../../../context'
import { toggleEditing } from '../../../../actions'
import { Wrapper, EditButton } from './_Styles'

const Edit = () => {
  const { isEditing, dispatch } = useContext(WordlyContext)

  const saveOrEdit = () => dispatch(toggleEditing())

  return (
    <Wrapper>
      <EditButton type="button" onClick={saveOrEdit} isEditing={isEditing}>
        {isEditing ? 'Finish editing' : 'Edit markdown'}
      </EditButton>
    </Wrapper>
  )
}

export default Edit
