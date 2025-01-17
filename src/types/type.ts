import { TActionProfile } from '../redux/Actions/profileAction'
import { TActionMessage } from '../redux/Actions/messageAction'
import { TActionFindUsers } from '../redux/Actions/findUsersAction'

// --------------------------- SIDE BAR --------------------
export type TSidebarNavLink = {
  id: number | string
  path: string
  value: string
}

export type TSidebarFriends = {
  id: number | string
  img: string
  value: string
}

export type TSidebarNavLinkState = {
  sidebarNavLink: Array<TSidebarNavLink>
  friends: Array<TSidebarFriends>
}

// --------------------------- PROFILE --------------------
export type TMyPostData = {
  id: number | string
  avatar: string
  text: string
  like: string | number
}

export type TProfilePageState = {
  myPostData: Array<TMyPostData>
  myPostText: string
}

// --------------------------- MESSAGE --------------------
export type TUsersDialogsData = {
  id: number | string
  name: string
}

export type TMessageData = {
  id: number | string
  message: string
}

export type TMessageDataState = {
  usersDialogsData: Array<TUsersDialogsData>
  messageData: Array<TMessageData>
  messageText: string
}

// --------------------------- FIND USERS --------------------
export type TFindUsersData = {
  id: string
  userName: string
  followed: boolean
  status: string
  location: {
    city: string
    country: string
  }
}

export type TFindUsersState = {
  users: Array<TFindUsersData>
}

// --------------------------- STATE --------------------
export type TState = {
  sidebar: TSidebarNavLinkState
  profilePage: TProfilePageState
  messagesPage: TMessageDataState
}

// --------------------------- STORE --------------------
export type TAction = TActionProfile | TActionMessage | TActionFindUsers

export type TCustomStore = {
  _state: TState
  _renderFunction: (state: TState) => void
  getState: () => TState
  subscribe: (callback: (state: TState) => void) => void
  dispatch: (action: TAction) => void
}
