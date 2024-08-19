export type TMyPostData = {
  id: number
  avatar: string
  text: string
  like: string | number
}

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
