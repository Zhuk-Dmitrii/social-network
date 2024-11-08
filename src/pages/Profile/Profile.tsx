import { AppStore } from '../../redux/store'
import { ProfileInfo } from '../../components/ProfileInfo'
import { MyPostsContainer } from '../../components/MyPosts'
import { TActionProfile } from '../../redux/Actions/profileAction'
import styles from './Profile.module.scss'

type TProfileProps = {
  store: AppStore
  dispatch: (action: TActionProfile) => void
}

export function Profile(props: TProfileProps) {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} dispatch={props.dispatch} />
    </div>
  )
}
