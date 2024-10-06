import { rerenderEntireTree } from '../render'
import { PATHS } from '../router/path'
import { TState, TMyPostData, TMessageData } from '../types/type'
import userAvatar from '../assets/icon/user.png'

export const state: TState = {
  sidebar: {
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
  },
  profilePage: {
    myPostData: [
      {
        id: 1,
        avatar:
          'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg',
        text: 'My first post',
        like: 1,
      },
      {
        id: 2,
        avatar:
          'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg',
        text: 'Hi, my name is Dmitry',
        like: 2,
      },
    ],
    myPostText: '',
  },
  messagesPage: {
    usersDialogsData: [
      {
        id: 1,
        name: 'Андрей',
      },
      {
        id: 2,
        name: 'Ольга',
      },
      {
        id: 3,
        name: 'Света',
      },
      {
        id: 4,
        name: 'Игорь',
      },
      {
        id: 5,
        name: 'Вася',
      },
    ],
    messageData: [
      {
        id: 1,
        message: 'Hi!',
      },
      {
        id: 2,
        message: 'Hello!',
      },
      {
        id: 3,
        message: 'Как дела?',
      },
      {
        id: 4,
        message: 'Хорошо! У тебя как?',
      },
      {
        id: 5,
        message: 'Отлично!',
      },
    ],
    messageText: '',
  },
}

export function addMyPost() {
  const newPost: TMyPostData = {
    id: crypto.randomUUID(),
    avatar:
      'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg',
    text: state.profilePage.myPostText,
    like: 0,
  }

  state.profilePage.myPostData.push(newPost)

  rerenderEntireTree(state)
}

export function changeMyPostText(text: string) {
  state.profilePage.myPostText = text

  rerenderEntireTree(state)
}

export function addMessage() {
  const newMessage: TMessageData = {
    id: crypto.randomUUID(),
    message: state.messagesPage.messageText,
  }

  state.messagesPage.messageData.push(newMessage)

  rerenderEntireTree(state)
}

export function changeMessageText(text: string) {
  state.messagesPage.messageText = text

  rerenderEntireTree(state)
}
