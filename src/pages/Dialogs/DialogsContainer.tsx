import { TAction } from '../../types/type'
import {
  actionCreatorAddMessage,
  actionCreatorChangeMessageText,
} from '../../redux/Actions/messageAction'
import { AppStore } from '../../redux/store'
import { Dialogs } from './Dialogs'

type TDialogsProps = {
  store: AppStore
  dispatch: (action: TAction) => void
}

export function DialogsContainer(props: TDialogsProps) {
  const { usersDialogsData, messageData, messageText } = props.store.getState().messagesPage

  const addNewMessage = () => {
    const actionAddMessage = actionCreatorAddMessage()
    const actionChangeMessageText = actionCreatorChangeMessageText('')

    props.dispatch(actionAddMessage)
    props.dispatch(actionChangeMessageText)
  }

  const changeInputMessage = (value: string) => {
    const actionChangeMessageText = actionCreatorChangeMessageText(value)

    props.dispatch(actionChangeMessageText)
  }

  return (
    <Dialogs
      addNewMessage={addNewMessage}
      changeInputMessage={changeInputMessage}
      usersDialogsData={usersDialogsData}
      messageData={messageData}
      messageText={messageText}
    />
  )
}
