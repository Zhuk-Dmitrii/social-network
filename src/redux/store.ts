import { combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit'

import { messageReducer } from './reducers/messageReducer'
import { profileReducer } from './reducers/profileReducer'
import { sidebarReducer } from './reducers/sidebarReducer'

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  profilePage: profileReducer,
  messagesPage: messageReducer,
})

export const store = createStore(rootReducer)
