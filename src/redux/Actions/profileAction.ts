export enum ActionTypeProfile {
  ADD_POST = 'ADD_POST',
  CHANGE_MY_POST_TEXT = 'CHANGE_MY_POST_TEXT',
}

type TActionCreatorAddPost = {
  type: ActionTypeProfile.ADD_POST
}

type TActionCreatorChangeMyPostText = {
  type: ActionTypeProfile.CHANGE_MY_POST_TEXT
  text: string
}

export type TActionProfile = TActionCreatorAddPost | TActionCreatorChangeMyPostText

export function actionCreatorAddPost(): TActionCreatorAddPost {
  return {
    type: ActionTypeProfile.ADD_POST,
  }
}

export function actionCreatorChangeMyPostText(text: string): TActionCreatorChangeMyPostText {
  return {
    type: ActionTypeProfile.CHANGE_MY_POST_TEXT,
    text,
  }
}
