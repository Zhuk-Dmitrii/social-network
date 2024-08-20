import { RouterProvider } from 'react-router-dom'

import { router } from './router/router'
import './App.scss'
import { TMessageData, TMyPostData, TUsersDialogsData } from './index'

type TAppProps = {
  usersDialogsData: Array<TUsersDialogsData>
  messageData: Array<TMessageData>
  myPostData: Array<TMyPostData>
}

export function App(props: TAppProps) {
  return (
    <div className="wrapper">
      <RouterProvider
        router={router(props.usersDialogsData, props.messageData, props.myPostData)}
      />
    </div>
  )
}
