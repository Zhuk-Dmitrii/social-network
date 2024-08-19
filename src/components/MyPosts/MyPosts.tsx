import { Post } from './Post'
import { myPostData } from './data'
import styles from './MyPosts.module.scss'

export function MyPosts() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>My posts</h3>
      <form className={styles.postCreationForm}>
        <input type="text" />
        <button type="submit">Send</button>
      </form>
      <div className={styles.posts}>
        {myPostData.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </div>
  )
}
