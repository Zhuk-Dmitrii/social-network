import { TActionProfile, ActionProfile } from '../Actions/profileAction'
import { TProfilePageState, TMyPostData } from '../../types/type'

const initialState: TProfilePageState = {
  myPostData: [
    {
      id: 1,
      avatar:
        'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg',
      text: 'My first post',
      like: 1,
    },
    {
      id: 2,
      avatar:
        'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg',
      text: 'Hi, my name is Dmitry',
      like: 2,
    },
  ],
  myPostText: '',
}

export function profileReducer(
  state: TProfilePageState = initialState,
  action: TActionProfile,
): TProfilePageState {
  switch (action.type) {
    case ActionProfile.ADD_POST: {
      const newPost: TMyPostData = {
        id: action.id,
        avatar:
          'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg',
        text: state.myPostText,
        like: 0,
      }

      const stateCopy: TProfilePageState = {
        ...state,
        myPostData: [...state.myPostData, newPost],
      }

      return stateCopy
    }
    case ActionProfile.CHANGE_MY_POST_TEXT: {
      const stateCopy: TProfilePageState = {
        ...state,
        myPostText: action.text,
      }

      return stateCopy
    }
    default:
      return state
  }
}
