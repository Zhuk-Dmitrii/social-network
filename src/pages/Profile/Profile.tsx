import { ProfileInfo } from '../../components/ProfileInfo'
import { MyPostsContainer } from '../../components/MyPosts'
import styles from './Profile.module.scss'

export function Profile() {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}
