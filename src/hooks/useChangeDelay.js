import { useContext, useState, useEffect } from 'react'
import debounce from 'lodash/debounce'

import WordlyContext from '../context'

function useChangeDelay(_ref, value, action) {
  const [delayChange, setDelayChange] = useState()
  const { dispatch, [value]: stateValue } = useContext(WordlyContext)

  useEffect(() => {
    const saveChanges = () => {
      dispatch(action(_ref.current.value))
    }

    setDelayChange(() => debounce(saveChanges, 600))
  }, [])

  return [stateValue, delayChange]
}

export default useChangeDelay
