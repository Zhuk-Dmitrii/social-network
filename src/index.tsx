import { state } from './redux/state.ts'
import { rerenderEntireTree } from './render.tsx'

rerenderEntireTree(state)
