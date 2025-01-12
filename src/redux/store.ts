import { combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit'

import { messageReducer } from './reducers/messageReducer'
import { profileReducer } from './reducers/profileReducer'
import { sidebarReducer } from './reducers/sidebarReducer'
import { findUsersReducer } from './reducers/findUsersReducer'

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  profilePage: profileReducer,
  messagesPage: messageReducer,
  findUsers: findUsersReducer,
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer)
