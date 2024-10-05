import { createBrowserRouter, Navigate } from 'react-router-dom'

import { PATHS } from './path'
import { Layout } from '../components/Layout'
import { Profile } from '../pages/Profile'
import { Dialogs } from '../pages/Dialogs'
import { News } from '../pages/News'
import { Music } from '../pages/Music'
import { Settings } from '../pages/Settings'
import { NotFound } from '../pages/NotFound'
import { TState } from '../types/type'

export const router = (
  state: TState,
  addMyPost: () => void,
  changeMyPostText: (text: string) => void,
) =>
  createBrowserRouter([
    {
      path: PATHS.HOME,
      element: <Layout state={state.sidebar} />,
      children: [
        {
          path: PATHS.HOME,
          element: <Navigate to={PATHS.PROFILE} replace />,
        },
        {
          path: PATHS.PROFILE,
          element: (
            <Profile
              state={state.profilePage}
              addMyPost={addMyPost}
              changeMyPostText={changeMyPostText}
            />
          ),
        },
        {
          path: PATHS.DIALOGS,
          element: <Navigate to={`${PATHS.DIALOGS}/1`} replace />,
        },
        {
          path: `${PATHS.DIALOGS}/:id`,
          element: <Dialogs state={state.messagesPage} />,
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
