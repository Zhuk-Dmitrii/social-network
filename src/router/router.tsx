import { createBrowserRouter, Navigate } from 'react-router-dom'

import { PATHS } from './path'
import { Layout } from '../components/Layout'
import { Profile } from '../pages/Profile'
import { Dialogs } from '../pages/Dialogs'
import { News } from '../pages/News'
import { Music } from '../pages/Music'
import { Settings } from '../pages/Settings'
import { NotFound } from '../pages/NotFound'
import { TUsersDialogsData, TMessageData, TMyPostData } from '../index'

export const router = (
  usersDialogsData: Array<TUsersDialogsData>,
  messageData: Array<TMessageData>,
  myPostData: Array<TMyPostData>,
) =>
  createBrowserRouter([
    {
      path: PATHS.HOME,
      element: <Layout />,
      children: [
        {
          path: PATHS.HOME,
          element: <Navigate to={PATHS.PROFILE} replace />,
        },
        {
          path: PATHS.PROFILE,
          element: <Profile myPostData={myPostData} />,
        },
        {
          path: PATHS.DIALOGS,
          element: <Navigate to={`${PATHS.DIALOGS}/1`} replace />,
        },
        {
          path: `${PATHS.DIALOGS}/:id`,
          element: <Dialogs usersDialogsData={usersDialogsData} messageData={messageData} />,
        },
        {
          path: PATHS.NEWS,
          element: <News />,
        },
        {
          path: PATHS.MUSIC,
          element: <Music />,
        },
        {
          path: PATHS.SETTINGS,
          element: <Settings />,
        },
        {
          path: PATHS.NOT_FOUND,
          element: <NotFound />,
        },
      ],
    },
  ])
