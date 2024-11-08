import { RouterProvider } from 'react-router-dom'

import { router } from './router/router'
import { TAction, TState } from './types/type'
import { AppStore } from './redux/store'
import './App.scss'

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
