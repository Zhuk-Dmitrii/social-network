import { connect } from 'react-redux'

import {
  actionCreatorAddMessage,
  actionCreatorChangeMessageText,
} from '../../redux/Actions/messageAction'
import { Dialogs } from './Dialogs'
import { AppDispatch, RootState } from '../../redux/store'

const mapStateToProps = (state: RootState) => {
  return {
    usersDialogsData: state.messagesPage.usersDialogsData,
    messageData: state.messagesPage.messageData,
    messageText: state.messagesPage.messageText,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addNewMessage: () => {
      dispatch(actionCreatorAddMessage())
      dispatch(actionCreatorChangeMessageText(''))
    },
    changeInputMessage: (value: string) => dispatch(actionCreatorChangeMessageText(value)),
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
