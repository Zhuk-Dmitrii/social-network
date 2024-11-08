import { connect } from 'react-redux'

import { NavLinkItem } from '../NavLinkItem'
import { Friends } from './Friends'
import styles from './Sidebar.module.scss'
import { TSidebarFriends, TSidebarNavLink } from '../../types/type'
import { RootState } from '../../redux/store'

type TProps = {
  sidebarNavLink: Array<TSidebarNavLink>
  friends: Array<TSidebarFriends>
}

export function Sidebar(props: TProps) {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          {props.sidebarNavLink.map(item => (
            <NavLinkItem
              key={item.id}
              to={item.path}
              className={styles.menuItem}
              classActive={styles.active}
              value={item.value}
            />
          ))}
        </ul>
        <Friends friends={props.friends} />
      </nav>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    sidebarNavLink: state.sidebar.sidebarNavLink,
    friends: state.sidebar.friends,
  }
}

export const SidebarContainer = connect(mapStateToProps)(Sidebar)
