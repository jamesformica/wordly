import React, { useRef } from 'react'

import useChangeDelay from '../../../../hooks/useChangeDelay'
import { updateTitle } from '../../../../actions'
import { TitleInput } from './_Styles'

const Title = () => {
  const _title = useRef()
  const [title, onChange] = useChangeDelay(_title, 'title', updateTitle)

  return (
    <TitleInput
      ref={_title}
      type="text"
      onChange={onChange}
      defaultValue={title}
      placeholder="Narative title"
    />
  )
}

export default Title
