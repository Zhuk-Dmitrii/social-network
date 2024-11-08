import { RouterProvider } from 'react-router-dom'

import { router } from './router/router'
import { TAction, TState } from './types/type'
import './App.scss'
import { AppStore } from './redux/store'

type TAppProps = {
  store: AppStore
  state: TState
  dispatch: (action: TAction) => void
}

export function App(props: TAppProps) {
  return (
    <div className="wrapper">
      <RouterProvider router={router(props.store, props.state, props.dispatch)} />
    </div>
  )
}
