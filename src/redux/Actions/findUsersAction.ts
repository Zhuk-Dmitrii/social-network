import { TFindUsersData } from '../../types/type'

export enum ActionFindUsers {
  FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET_USERS',
}

type TActionCreatorFollow = {
  type: ActionFindUsers.FOLLOW
  id: string
}

type TActionCreatorUnfollow = {
  type: ActionFindUsers.UNFOLLOW
  id: string | number
}

type TActionCreatorSetUsers = {
  type: ActionFindUsers.SET_USERS
  users: Array<TFindUsersData>
}

export type TActionFindUsers =
  | TActionCreatorFollow
  | TActionCreatorUnfollow
  | TActionCreatorSetUsers

export function actionCreatorFollow(id: string): TActionCreatorFollow {
  return {
    type: ActionFindUsers.FOLLOW,
    id,
  }
}

export function actionCreatorUnfollow(id: string): TActionCreatorUnfollow {
  return {
    type: ActionFindUsers.UNFOLLOW,
    id,
  }
}

export function actionCreatorSetUsers(users: Array<TFindUsersData>): TActionCreatorSetUsers {
  return {
    type: ActionFindUsers.SET_USERS,
    users,
  }
}
