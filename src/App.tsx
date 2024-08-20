import { RouterProvider } from 'react-router-dom'

import { router } from './router/router'
import { TState } from './types/type'
import './App.scss'

type TAppProps = {
  state: TState
}

export function App(props: TAppProps) {
  return (
    <div className="wrapper">
      <RouterProvider router={router(props.state)} />
    </div>
  )
}
