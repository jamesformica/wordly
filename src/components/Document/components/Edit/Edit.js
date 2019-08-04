import React, { useContext } from 'react'

import WordlyContext from '../../../../context'
import { toggleEditing, setShape } from '../../../../actions'
import { Wrapper, EditButton, OptionWrapper, ShapeButton } from './_Styles'

const SHAPE_OPTIONS = [
  { type: 'circle', text: '○' },
  { type: 'triangle', text: '△' },
  { type: 'square', text: '□' },
]

const Edit = () => {
  const { isEditing, dispatch, shape } = useContext(WordlyContext)

  const saveOrEdit = () => dispatch(toggleEditing())
  const newShape = shape => () => dispatch(setShape(shape))

  return (
    <Wrapper>
      <EditButton type="button" onClick={saveOrEdit} isEditing={isEditing}>
        {isEditing ? 'Finish editing' : 'Edit markdown'}
      </EditButton>

      <OptionWrapper>
        {SHAPE_OPTIONS.map(({ type, text }) => (
          <ShapeButton
            key={type}
            type="button"
            name={type}
            shape={shape}
            onClick={newShape(type)}
          >
            {text}
          </ShapeButton>
        ))}
      </OptionWrapper>
    </Wrapper>
  )
}

export default Edit
