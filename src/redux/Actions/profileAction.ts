export enum ActionProfile {
  ADD_POST = 'ADD_POST',
  CHANGE_MY_POST_TEXT = 'CHANGE_MY_POST_TEXT',
}

type TActionCreatorAddPost = {
  type: ActionProfile.ADD_POST
}

type TActionCreatorChangeMyPostText = {
  type: ActionProfile.CHANGE_MY_POST_TEXT
  text: string
}

export type TActionProfile = TActionCreatorAddPost | TActionCreatorChangeMyPostText

export function actionCreatorAddPost(): TActionCreatorAddPost {
  return {
    type: ActionProfile.ADD_POST,
  }
}

export function actionCreatorChangeMyPostText(text: string): TActionCreatorChangeMyPostText {
  return {
    type: ActionProfile.CHANGE_MY_POST_TEXT,
    text,
  }
}
