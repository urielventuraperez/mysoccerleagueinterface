import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducer from './redux/reducers/index'
import Root from './components/root'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)
ReactDOM.render(<Root store={store} />, document.getElementById('root'))

serviceWorker.unregister();