import { Post } from './Post'
import { TMyPostData } from '../../index'
import styles from './MyPosts.module.scss'

type TMyPostProps = {
  myPostData: Array<TMyPostData>
}

export function MyPosts(props: TMyPostProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>My posts</h3>
      <form className={styles.postCreationForm}>
        <input type="text" />
        <button type="submit">Send</button>
      </form>
      <div className={styles.posts}>
        {props.myPostData.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </div>
  )
}
