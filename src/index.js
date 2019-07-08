import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from './redux/reducers'
import Root from './components/root'

const store = createStore(reducer)

render(<Root store={store} />, document.getElementById('root'))