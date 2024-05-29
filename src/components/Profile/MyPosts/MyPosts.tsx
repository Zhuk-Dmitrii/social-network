import { Post } from './Post'
import styles from './MyPosts.module.scss'

export interface IPost {
  avatar: string
  text: string
  info: string | number
}

const data: Array<IPost> = [
  {
    avatar:
      'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg',
    text: 'My first post',
    info: 1,
  },
  {
    avatar:
      'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg',
    text: 'Hi, my name is Dmitry',
    info: 2,
  },
]

export function MyPosts() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>My posts</h3>
      <form className={styles.postCreationForm}>
        <input type="text" />
        <button type="submit">Send</button>
      </form>
      <div className={styles.posts}>
        <Post data={data[0]} />
        <Post data={data[1]} />
      </div>
    </div>
  )
}
