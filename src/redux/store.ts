import { PATHS } from '../router/path'
import { profileReducer } from './reducers/profileReducer'
import { TStore, TMessageData } from '../types/type'
import userAvatar from '../assets/icon/user.png'

export const store: TStore = {
  _state: {
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
  },
  _renderFunction() {},
  getState() {
    return this._state
  },
  addMessage() {
    const newMessage: TMessageData = {
      id: crypto.randomUUID(),
      message: this._state.messagesPage.messageText,
    }

    this._state.messagesPage.messageData.push(newMessage)

    this._renderFunction(this._state)
  },
  changeMessageText(text) {
    this._state.messagesPage.messageText = text

    this._renderFunction(this._state)
  },
  subscriber(callback) {
    this._renderFunction = callback
  },
  dispatch(action) {
    const state = this.getState()

    state.profilePage = profileReducer(this._state.profilePage, action)

    this._renderFunction(this._state)
  },
}
