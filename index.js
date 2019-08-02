import React from 'react'
import ReactDOM from 'react-dom'

import App from './src/components/App/App'

const Root = () => {
  return <App />
}

ReactDOM.render(<Root />, global.document.getElementById('root'))
