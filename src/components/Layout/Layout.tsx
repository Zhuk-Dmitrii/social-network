import { Outlet } from 'react-router-dom'

import { Header } from '../Header'
import { Main } from '../Main'
import { SidebarContainer } from '../Sidebar/Sidebar'

export function Layout() {
  return (
    <>
      <Header />
      <SidebarContainer />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}
