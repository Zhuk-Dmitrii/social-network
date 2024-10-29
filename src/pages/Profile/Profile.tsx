import { ProfileInfo } from '../../components/ProfileInfo'
import { MyPosts } from '../../components/MyPosts'
import { TMyPostData } from '../../types/type'
import { TActionProfile } from '../../redux/Actions/profileAction'
import styles from './Profile.module.scss'

type TProfileProps = {
  state: {
    myPostData: Array<TMyPostData>
    myPostText: string
  }
  dispatch: (action: TActionProfile) => void
}

export function Profile(props: TProfileProps) {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
      <MyPosts
        myPostData={props.state.myPostData}
        myPostText={props.state.myPostText}
        dispatch={props.dispatch}
      />
    </div>
  )
}
