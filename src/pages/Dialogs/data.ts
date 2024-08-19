type TUsersDialogsData = {
  id: number
  name: string
}

type TMessageData = {
  id: number
  message: string
}

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
