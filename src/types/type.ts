export type TUsersDialogsData = {
  id: number | string
  name: string
}

export type TMessageData = {
  id: number | string
  message: string
}

export type TMyPostData = {
  id: number | string
  avatar: string
  text: string
  like: string | number
}

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

export type TState = {
  sidebar: {
    sidebarNavLink: Array<TSidebarNavLink>
    friends: Array<TSidebarFriends>
  }
  profilePage: {
    myPostData: Array<TMyPostData>
    myPostText: string
  }
  messagesPage: {
    usersDialogsData: Array<TUsersDialogsData>
    messageData: Array<TMessageData>
    messageText: string
  }
}

export type TStore = {
  _state: TState
  _renderFunction: (state: TState) => void
  getState: () => TState
  addMyPost: () => void
  changeMyPostText: (text: string) => void
  addMessage: () => void
  changeMessageText: (text: string) => void
  subscriber: (callback: (state: TState) => void) => void
}
