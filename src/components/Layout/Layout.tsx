import { Outlet } from 'react-router-dom'

import { Header } from '../Header'
import { Main } from '../Main'
import { Sidebar } from '../Sidebar'
import { TSidebarFriends, TSidebarNavLink } from '../../types/type'

type TLayoutProps = {
  state: {
    sidebarNavLink: Array<TSidebarNavLink>
    friends: Array<TSidebarFriends>
  }
}

export function Layout(props: TLayoutProps) {
  return (
    <>
      <Header />
      <Sidebar state={props.state} />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}
