import { RouterProvider } from 'react-router-dom'

import { router } from './router/router'
import './App.scss'

export function App() {
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  )
}
