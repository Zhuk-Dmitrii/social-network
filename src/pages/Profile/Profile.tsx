import { ProfileInfo } from '../../components/ProfileInfo'
import { MyPosts } from '../../components/MyPosts'
import { TMyPostData } from '../../types/type'
import styles from './Profile.module.scss'

type TProfileProps = {
  state: {
    myPostData: Array<TMyPostData>
  }
}

export function Profile(props: TProfileProps) {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
      <MyPosts myPostData={props.state.myPostData} />
    </div>
  )
}
