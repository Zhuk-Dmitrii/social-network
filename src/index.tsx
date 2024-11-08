import ReactDOM from 'react-dom/client'

import { store } from './redux/store.ts'
import { App } from './App.tsx'
import { TState } from './types/type.ts'

import 'normalize.css'
import './index.scss'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

export function rerenderEntireTree(state: TState) {
  root.render(<App store={store} state={state} dispatch={store.dispatch.bind(store)} />)
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  const state = store.getState()

  rerenderEntireTree(state)
})
