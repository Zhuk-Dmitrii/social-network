export enum ActionMessage {
  ADD_MESSAGE = 'ADD_MESSAGE',
  CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT',
}

type TActionCreatorAddMessage = {
  type: ActionMessage.ADD_MESSAGE
  id: string
}

type TActionCreatorChangeMessageText = {
  type: ActionMessage.CHANGE_MESSAGE_TEXT
  text: string
}

export type TActionMessage = TActionCreatorAddMessage | TActionCreatorChangeMessageText

export function actionCreatorAddMessage(): TActionCreatorAddMessage {
  return {
    type: ActionMessage.ADD_MESSAGE,
    id: crypto.randomUUID(),
  }
}

export function actionCreatorChangeMessageText(text: string): TActionCreatorChangeMessageText {
  return {
    type: ActionMessage.CHANGE_MESSAGE_TEXT,
    text,
  }
}
