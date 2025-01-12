import { TFindUsersState } from '../../types/type'
import { ActionFindUsers, TActionFindUsers } from '../Actions/findUsersAction'

const initialState: TFindUsersState = {
  users: [
    {
      id: '1',
      userName: 'Dmitriy',
      followed: true,
      status: 'Hello World!',
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
    {
      id: '2',
      userName: 'Olga',
      followed: false,
      status: 'I am the best',
      location: {
        city: 'Moscow',
        country: 'Russia',
      },
    },
    {
      id: '3',
      userName: 'Jack',
      followed: true,
      status: 'I like JavaScript',
      location: {
        city: 'New-York',
        country: 'USA',
      },
    },
  ],
}

export function findUsersReducer(
  state: TFindUsersState = initialState,
  action: TActionFindUsers,
): TFindUsersState {
  switch (action.type) {
    case ActionFindUsers.FOLLOW: {
      const users = state.users.map(user => {
        if (user.id === action.id) {
          return { ...user, followed: true }
        } else {
          return user
        }
      })

      return { ...state, users }
    }

    case ActionFindUsers.UNFOLLOW: {
      const users = state.users.map(user => {
        if (user.id === action.id) {
          return { ...user, followed: false }
        } else {
          return user
        }
      })

      return { ...state, users }
    }

    case ActionFindUsers.SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      }
    }

    default:
      return state
  }
}
