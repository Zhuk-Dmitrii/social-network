export type TUsersDialogsData = {
  id: number
  name: string
}

export type TMessageData = {
  id: number
  message: string
}

export type TMyPostData = {
  id: number
  avatar: string
  text: string
  like: string | number
}

export type TState = {
  profilePage: {
    myPostData: Array<TMyPostData>
  }
  messagesPage: {
    usersDialogsData: Array<TUsersDialogsData>
    messageData: Array<TMessageData>
  }
}
