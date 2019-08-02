import React, { useRef } from 'react'

import useChangeDelay from '../../../../hooks/useChangeDelay'
import { updateNarative } from '../../../../actions'
import { Wrapper, Textarea } from './_Styles'

const Editor = () => {
  const _narative = useRef()
  const [narative, onChange] = useChangeDelay(_narative, 'narative', updateNarative)

  return (
    <Wrapper>
      <Textarea ref={_narative} onChange={onChange} defaultValue={narative} />
    </Wrapper>
  )
}

export default Editor
