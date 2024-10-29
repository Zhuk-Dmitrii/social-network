import { TActionProfile, ActionTypeProfile } from '../Actions/profileAction'
import { TProfilePageState } from '../../types/type'

export function profileReducer(
  state: TProfilePageState,
  action: TActionProfile,
): TProfilePageState {
  switch (action.type) {
    case ActionTypeProfile.ADD_POST: {
      const stateCopy = structuredClone(state)

      const newPost = {
        id: crypto.randomUUID(),
        avatar:
          'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg',
        text: state.myPostText,
        like: 0,
      }

      stateCopy.myPostData.push(newPost)
      stateCopy.myPostText = ''

      return stateCopy
    }
    case ActionTypeProfile.CHANGE_MY_POST_TEXT: {
      const stateCopy = structuredClone(state)

      stateCopy.myPostText = action.text

      return stateCopy
    }
    default:
      throw new Error('Sorry, action type invalid')
  }
}
