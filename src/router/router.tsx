import { createBrowserRouter, Navigate } from 'react-router-dom'

import { PATHS } from './path'
import { Layout } from '../components/Layout'
import { Profile } from '../pages/Profile'
import { DialogsContainer } from '../pages/Dialogs'
import { News } from '../pages/News'
import { Music } from '../pages/Music'
import { Settings } from '../pages/Settings'
import { NotFound } from '../pages/NotFound'
import { TAction, TState } from '../types/type'
import { AppStore } from '../redux/store'

export const router = (store: AppStore, state: TState, dispatch: (action: TAction) => void) =>
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
          element: <Profile store={store} dispatch={dispatch} />,
        },
        {
          path: PATHS.DIALOGS,
          element: <Navigate to={`${PATHS.DIALOGS}/1`} replace />,
        },
        {
          path: `${PATHS.DIALOGS}/:id`,
          element: <DialogsContainer store={store} dispatch={dispatch} />,
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
