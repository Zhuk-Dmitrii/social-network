import avatar from '../../../assets/icon/user.png'
import styles from './User.module.scss'

export function User() {
  return (
    <div className={styles.user}>
      <div className={styles.userAvatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.userInfo}>
        <p className={styles.userName}>Dmitriy Zhuk</p>
        <p className={styles.userLocation}>Minsk, Belarus</p>
        <p className={styles.userStatus}>I like JavaScript! </p>
      </div>
      <button className={styles.subscribe}>Follow</button>
    </div>
  )
}
