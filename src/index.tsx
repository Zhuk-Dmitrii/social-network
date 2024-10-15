import ReactDOM from 'react-dom/client'

import { state, subscriber } from './redux/state.ts'
import { App } from './App.tsx'
import { addMessage, addMyPost, changeMessageText, changeMyPostText } from './redux/state.ts'
import { TState } from './types/type.ts'

import 'normalize.css'
import './index.scss'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

export function rerenderEntireTree(state: TState) {
  root.render(
    <App
      state={state}
      addMyPost={addMyPost}
      changeMyPostText={changeMyPostText}
      addMessage={addMessage}
      changeMessageText={changeMessageText}
    />,
  )
}

rerenderEntireTree(state)
subscriber(rerenderEntireTree)
