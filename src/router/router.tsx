import { createBrowserRouter, Navigate } from 'react-router-dom'

import { PATHS } from './path'
import { Layout } from '../components/Layout'
import { Profile } from '../pages/Profile'
import { DialogsContainer } from '../pages/Dialogs'
import { News } from '../pages/News'
import { Music } from '../pages/Music'
import { Settings } from '../pages/Settings'
import { NotFound } from '../pages/NotFound'

export const router = createBrowserRouter([
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
        element: <Profile />,
      },
      {
        path: PATHS.DIALOGS,
        element: <Navigate to={`${PATHS.DIALOGS}/1`} replace />,
      },
      {
        path: `${PATHS.DIALOGS}/:id`,
        element: <DialogsContainer />,
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
