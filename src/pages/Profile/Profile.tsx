import { MyPosts } from '../../components/MyPosts'
import ImgProfile from '../../assets/img/profile-img.jpg'
import styles from './Profile.module.scss'

export function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <img src={ImgProfile} alt="" />
      </div>
      <div className={styles.info}>Avatar + info</div>
      <MyPosts />
    </div>
  )
}
