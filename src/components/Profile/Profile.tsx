import ImgProfile from '../../assets/img/profile-img.jpg'
import styles from './Profile.module.scss'

export function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <img src={ImgProfile} alt="" />
      </div>
      <div className={styles.info}>Avatar + info</div>
      <div className={styles.content}>
        <h3 className={styles.title}>My posts</h3>
        <form className={styles.postCreationForm}>
          <input type="text" />
          <button type="submit">Send</button>
        </form>
        <div className={styles.posts}>
          <div className={styles.post}>post 1</div>
          <div className={styles.post}>post 2</div>
        </div>
      </div>
    </div>
  )
}
