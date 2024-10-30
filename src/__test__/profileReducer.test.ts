import { TProfilePageState } from '../types/type'
import { profileReducer } from '../redux/reducers/profileReducer'
import { actionCreatorAddPost, actionCreatorChangeMyPostText } from '../redux/Actions/profileAction'

test('new post should be added on profile page', () => {
  const startState: TProfilePageState = {
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
    myPostText: 'Hello world',
  }

  const action = actionCreatorAddPost()

  const endState = profileReducer(startState, action)

  expect(endState.myPostData.length).toBe(3)
  expect(endState.myPostData[2].text).toBe(startState.myPostText)
})

test('input text value should be changed', () => {
  const startState: TProfilePageState = {
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

  const newText = 'Hello world'
  const action = actionCreatorChangeMyPostText(newText)
  const endState = profileReducer(startState, action)

  expect(endState.myPostText).toBe(newText)
})
