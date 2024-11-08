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

export function profileReducer(state = initialState, action: TActionProfile): TProfilePageState {
  switch (action.type) {
    case ActionProfile.ADD_POST: {
      const stateCopy = structuredClone(state)

      const newPost: TMyPostData = {
        id: action.id,
        avatar:
          'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg',
        text: state.myPostText,
        like: 0,
      }

      stateCopy.myPostData.push(newPost)
      stateCopy.myPostText = ''

      return stateCopy
    }
    case ActionProfile.CHANGE_MY_POST_TEXT: {
      const stateCopy = structuredClone(state)

      stateCopy.myPostText = action.text

      return stateCopy
    }
    default:
      return state
  }
}
