import { ChangeEvent, FormEvent } from 'react'

import { Post } from './Post'
import { TMyPostData } from '../../types/type'
import {
  TActionProfile,
  actionCreatorAddPost,
  actionCreatorChangeMyPostText,
} from '../../redux/Actions/profileAction'
import styles from './MyPosts.module.scss'

type TMyPostProps = {
  myPostData: Array<TMyPostData>
  myPostText: string
  dispatch: (action: TActionProfile) => void
}

export function MyPosts(props: TMyPostProps) {
  function addMyPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const action = actionCreatorAddPost()

    props.dispatch(action)
  }

  function changeMyPostInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    const action = actionCreatorChangeMyPostText(value)

    props.dispatch(action)
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>My posts</h3>
      <form onSubmit={addMyPost} className={styles.postCreationForm}>
        <input value={props.myPostText} onChange={changeMyPostInput} type="text" />
        <button type="submit">Send</button>
      </form>
      <div className={styles.posts}>
        {props.myPostData.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </div>
  )
}
