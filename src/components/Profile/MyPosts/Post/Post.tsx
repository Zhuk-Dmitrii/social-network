import { IPost } from '../MyPosts'
import styles from './Post.module.scss'

type TProps = {
  data: IPost
}

export function Post({ data }: TProps) {
  return (
    <div className={styles.post}>
      <img className={styles.userAvatar} src={data.avatar} alt="user-avatar" />
      <p className={styles.text}>{data.text}</p>
      <span className={styles.info}>like: {data.like}</span>
    </div>
  )
}
