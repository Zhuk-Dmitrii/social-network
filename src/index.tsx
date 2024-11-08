import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './redux/store.ts'
import { App } from './App.tsx'

import 'normalize.css'
import './index.scss'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

export function rerenderEntireTree() {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
}

rerenderEntireTree()

store.subscribe(() => {
  rerenderEntireTree()
})
