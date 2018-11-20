import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './styles'
import { App } from '@/app'

ReactDOM.render(React.createElement(App), document.querySelector('#root'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
