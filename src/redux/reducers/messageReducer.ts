import { TMessageData, TMessageDataState } from '../../types/type'
import { ActionMessage, TActionMessage } from '../Actions/messageAction'

export function messageReducer(
  state: TMessageDataState,
  action: TActionMessage,
): TMessageDataState {
  switch (action.type) {
    case ActionMessage.ADD_MESSAGE: {
      const stateCopy = structuredClone(state)

      const newMessage: TMessageData = {
        id: action.id,
        message: state.messageText,
      }

      stateCopy.messageData.push(newMessage)

      return stateCopy
    }
    case ActionMessage.CHANGE_MESSAGE_TEXT: {
      const stateCopy = structuredClone(state)

      stateCopy.messageText = action.text

      return stateCopy
    }
    default:
      throw new Error('Sorry, invalid action')
  }
}
