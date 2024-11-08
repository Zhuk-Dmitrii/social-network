import {
  TActionProfile,
  actionCreatorAddPost,
  actionCreatorChangeMyPostText,
} from '../../redux/Actions/profileAction'
import { MyPosts } from './MyPosts'
import { AppStore } from '../../redux/store'

type TMyPostProps = {
  store: AppStore
  dispatch: (action: TActionProfile) => void
}

export function MyPostsContainer(props: TMyPostProps) {
  const { myPostData, myPostText } = props.store.getState().profilePage

  function addMyPost() {
    const action = actionCreatorAddPost()

    props.dispatch(action)
  }

  function changeMyPostInput(value: string) {
    const action = actionCreatorChangeMyPostText(value)

    props.dispatch(action)
  }

  return (
    <MyPosts
      addMyPost={addMyPost}
      changeMyPostInput={changeMyPostInput}
      myPostData={myPostData}
      myPostText={myPostText}
    />
  )
}
