import { ProfileInfo } from '../../components/ProfileInfo'
import { MyPosts } from '../../components/MyPosts'
import styles from './Profile.module.scss'

export function Profile() {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}
