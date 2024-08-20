import { TState } from '../types/type'

export const state: TState = {
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
  },
}
