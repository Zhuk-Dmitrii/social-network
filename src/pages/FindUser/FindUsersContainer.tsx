import { connect } from 'react-redux'

import { FindUsers } from './FindUsers'
import { actionCreatorFollow, actionCreatorUnfollow } from '../../redux/Actions/findUsersAction'
import { RootState, AppDispatch } from '../../redux/store'

const mapStateToProps = (state: RootState) => {
  return {
    findUsers: state.findUsers.users,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    follow: (id: string) => {
      dispatch(actionCreatorFollow(id))
    },
    unfollow: (id: string) => {
      dispatch(actionCreatorUnfollow(id))
    },
  }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)
