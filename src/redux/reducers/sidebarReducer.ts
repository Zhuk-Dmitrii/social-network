import { PATHS } from '../../router/path'
import { TSidebarNavLinkState } from '../../types/type'
import userAvatar from '../../assets/icon/user.png'

const initialState: TSidebarNavLinkState = {
  sidebarNavLink: [
    {
      id: 1,
      path: PATHS.PROFILE,
      value: 'Profile',
    },
    {
      id: 2,
      path: PATHS.DIALOGS,
      value: 'Messages',
    },
    {
      id: 3,
      path: PATHS.NEWS,
      value: 'News',
    },
    {
      id: 4,
      path: PATHS.MUSIC,
      value: 'Music',
    },
    {
      id: 5,
      path: PATHS.SETTINGS,
      value: 'Settings',
    },
    {
      id: 6,
      path: PATHS.FIND_USERS,
      value: 'Find users',
    },
  ],
  friends: [
    {
      id: 1,
      img: userAvatar,
      value: 'Андрей',
    },
    {
      id: 2,
      img: userAvatar,
      value: 'Ольга',
    },
    {
      id: 3,
      img: userAvatar,
      value: 'Света',
    },
    {
      id: 4,
      img: userAvatar,
      value: 'Игорь',
    },
    {
      id: 5,
      img: userAvatar,
      value: 'Вася',
    },
  ],
}

export function sidebarReducer(state = initialState, action) {
  return state
}
