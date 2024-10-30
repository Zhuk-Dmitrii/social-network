import {
  actionCreatorAddMessage,
  actionCreatorChangeMessageText,
} from '../redux/Actions/messageAction'
import { messageReducer } from '../redux/reducers/messageReducer'
import { TMessageDataState } from '../types/type'

test('new message should be added in chat on message page', () => {
  const startState: TMessageDataState = {
    usersDialogsData: [
      {
        id: 1,
        name: 'Андрей',
      },
      {
        id: 2,
        name: 'Ольга',
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
    ],
    messageText: 'How are you?',
  }

  const action = actionCreatorAddMessage()
  const endState = messageReducer(startState, action)

  expect(endState.messageData.length).toBe(3)
  expect(endState.messageData[2].message).toBe(startState.messageText)
})

test('input message text should be changed', () => {
  const startState: TMessageDataState = {
    usersDialogsData: [
      {
        id: 1,
        name: 'Андрей',
      },
      {
        id: 2,
        name: 'Ольга',
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
    ],
    messageText: '',
  }

  const newMessageText = 'How are you?'
  const action = actionCreatorChangeMessageText(newMessageText)
  const endState = messageReducer(startState, action)

  expect(endState.messageText).toBe(newMessageText)
})
