import { connect } from 'react-redux'

import {
  actionCreatorAddPost,
  actionCreatorChangeMyPostText,
} from '../../redux/Actions/profileAction'
import { MyPosts } from './MyPosts'
import { AppDispatch, RootState } from '../../redux/store'

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
