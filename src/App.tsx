import { RouterProvider } from 'react-router-dom'

import { TActionProfile } from './redux/Actions/profileAction'
import { router } from './router/router'
import { TState } from './types/type'
import './App.scss'

type TAppProps = {
  state: TState
  dispatch: (action: TActionProfile) => void
  addMessage: () => void
  changeMessageText: (text: string) => void
}

export function App(props: TAppProps) {
  return (
    <div className="wrapper">
      <RouterProvider
        router={router(props.state, props.dispatch, props.addMessage, props.changeMessageText)}
      />
    </div>
  )
}
