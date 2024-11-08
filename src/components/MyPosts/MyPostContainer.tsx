import { connect } from 'react-redux'

import {
  actionCreatorAddPost,
  actionCreatorChangeMyPostText,
} from '../../redux/Actions/profileAction'
import { MyPosts } from './MyPosts'
import { AppDispatch, RootState } from '../../redux/store'

// export function MyPostsContainer() {
//   const dispatch = store.dispatch
//   const { myPostData, myPostText } = store.getState().profilePage

//   function addMyPost() {
//     const action = actionCreatorAddPost()

//     dispatch(action)
//   }

//   function changeMyPostInput(value: string) {
//     const action = actionCreatorChangeMyPostText(value)

//     dispatch(action)
//   }

//   return (
//     <MyPosts
//       addMyPost={addMyPost}
//       changeMyPostInput={changeMyPostInput}
//       myPostData={myPostData}
//       myPostText={myPostText}
//     />
//   )
// }

const mapStateToProps = (state: RootState) => {
  return {
    myPostData: state.profilePage.myPostData,
    myPostText: state.profilePage.myPostText,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addMyPost: () => dispatch(actionCreatorAddPost()),
    changeMyPostInput: (value: string) => dispatch(actionCreatorChangeMyPostText(value)),
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
