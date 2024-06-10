import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'
import { Profile } from './components/Profile'
import { Dialogs } from './components/Dialogs'
import './App.scss'

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Main>
        <Profile />
        <Dialogs />
      </Main>
    </div>
  )
}
