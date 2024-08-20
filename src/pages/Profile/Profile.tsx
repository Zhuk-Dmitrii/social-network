import { ProfileInfo } from '../../components/ProfileInfo'
import { MyPosts } from '../../components/MyPosts'
import { TMyPostData } from '../../index'
import styles from './Profile.module.scss'

type TProfileProps = {
  myPostData: Array<TMyPostData>
}

export function Profile(props: TProfileProps) {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
      <MyPosts myPostData={props.myPostData} />
    </div>
  )
}
