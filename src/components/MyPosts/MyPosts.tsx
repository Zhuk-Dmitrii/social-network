import React, { FormEvent, RefObject } from 'react'

import { Post } from './Post'
import { TMyPostData } from '../../types/type'
import styles from './MyPosts.module.scss'

type TMyPostProps = {
  myPostData: Array<TMyPostData>
  myPostText: string
  addMyPost: () => void
  changeMyPostText: (text: string) => void
}

export function MyPosts(props: TMyPostProps) {
  const refInput: RefObject<HTMLInputElement> = React.createRef()

  function addMyPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    props.addMyPost()
    props.changeMyPostText('')
  }

  function changeMyPostInput() {
    if (refInput.current) {
      const value = refInput.current.value

      props.changeMyPostText(value)
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>My posts</h3>
      <form onSubmit={addMyPost} className={styles.postCreationForm}>
        <input ref={refInput} value={props.myPostText} onChange={changeMyPostInput} type="text" />
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
