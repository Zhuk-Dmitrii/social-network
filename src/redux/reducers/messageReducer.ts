import { TMessageData, TMessageDataState } from '../../types/type'
import { ActionMessage, TActionMessage } from '../Actions/messageAction'

const initialState: TMessageDataState = {
  usersDialogsData: [
    {
      id: 1,
      name: 'Андрей',
    },
    {
      id: 2,
      name: 'Ольга',
    },
    {
      id: 3,
      name: 'Света',
    },
    {
      id: 4,
      name: 'Игорь',
    },
    {
      id: 5,
      name: 'Вася',
    },
  ],
  messageData: [
    {
      id: 1,
      message: 'Hi!',
    },
    {
      id: 2,
      message: 'Hello!',
    },
    {
      id: 3,
      message: 'Как дела?',
    },
    {
      id: 4,
      message: 'Хорошо! У тебя как?',
    },
    {
      id: 5,
      message: 'Отлично!',
    },
  ],
  messageText: '',
}

export function messageReducer(state = initialState, action: TActionMessage): TMessageDataState {
  switch (action.type) {
    case ActionMessage.ADD_MESSAGE: {
      const newMessage: TMessageData = {
        id: action.id,
        message: state.messageText,
      }

      const stateCopy: typeof state = {
        ...state,
        messageData: [...state.messageData, newMessage],
      }

      return stateCopy
    }
    case ActionMessage.CHANGE_MESSAGE_TEXT: {
      const stateCopy: typeof state = {
        ...state,
        messageText: action.text,
      }

      return stateCopy
    }
    default:
      return state
  }
}
