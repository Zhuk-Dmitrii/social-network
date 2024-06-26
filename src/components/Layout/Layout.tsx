import { Outlet } from 'react-router-dom'

import { Header } from '../Header'
import { Main } from '../Main'
import { Sidebar } from '../Sidebar'

export function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}
