import { ProfileInfo } from '../../components/ProfileInfo'
import { MyPosts } from '../../components/MyPosts'
import { TMyPostData } from '../../types/type'
import styles from './Profile.module.scss'

type TProfileProps = {
  state: {
    myPostData: Array<TMyPostData>
    myPostText: string
  }
  addMyPost: () => void
  changeMyPostText: (text: string) => void
}

export function Profile(props: TProfileProps) {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
      <MyPosts
        myPostData={props.state.myPostData}
        myPostText={props.state.myPostText}
        addMyPost={props.addMyPost}
        changeMyPostText={props.changeMyPostText}
      />
    </div>
  )
}
