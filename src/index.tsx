import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import 'normalize.css'
import './index.scss'

// ---------------------------------TYPES----------------------------
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

// ---------------------------------DATA----------------------------
export const usersDialogsData: Array<TUsersDialogsData> = [
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
]

export const messageData: Array<TMessageData> = [
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
]

export const myPostData: Array<TMyPostData> = [
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
]

// ---------------------------------RENDER APP----------------------------

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App usersDialogsData={usersDialogsData} messageData={messageData} myPostData={myPostData} />
  </React.StrictMode>,
)
