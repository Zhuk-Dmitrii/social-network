import ReactDOM from 'react-dom/client'

import { store } from './redux/state.ts'
import { App } from './App.tsx'
import { TState } from './types/type.ts'

import 'normalize.css'
import './index.scss'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

export function rerenderEntireTree(state: TState) {
  root.render(
    <App
      state={state}
      addMyPost={store.addMyPost.bind(store)}
      changeMyPostText={store.changeMyPostText.bind(store)}
      addMessage={store.addMessage.bind(store)}
      changeMessageText={store.changeMessageText.bind(store)}
    />,
  )
}

rerenderEntireTree(store.getState())
store.subscriber(rerenderEntireTree)
