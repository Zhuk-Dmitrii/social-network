import { connect } from 'react-redux'

import {
  actionCreatorAddMessage,
  actionCreatorChangeMessageText,
} from '../../redux/Actions/messageAction'
import { Dialogs } from './Dialogs'
import { AppDispatch, RootState } from '../../redux/store'

// export function DialogsContainer() {
//   const dispatch = store.dispatch
//   const { usersDialogsData, messageData, messageText } = store.getState().messagesPage

//   const addNewMessage = () => {
//     const actionAddMessage = actionCreatorAddMessage()
//     const actionChangeMessageText = actionCreatorChangeMessageText('')

//     dispatch(actionAddMessage)
//     dispatch(actionChangeMessageText)
//   }

//   const changeInputMessage = (value: string) => {
//     const actionChangeMessageText = actionCreatorChangeMessageText(value)

//     dispatch(actionChangeMessageText)
//   }

//   return (
//     <Dialogs
//       addNewMessage={addNewMessage}
//       changeInputMessage={changeInputMessage}
//       usersDialogsData={usersDialogsData}
//       messageData={messageData}
//       messageText={messageText}
//     />
//   )
// }

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
