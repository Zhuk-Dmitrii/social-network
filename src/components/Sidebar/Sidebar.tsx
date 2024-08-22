import { NavLinkItem } from '../NavLinkItem'
import { Friends } from './Friends'
import { TSidebarFriends, TSidebarNavLink } from '../../types/type'
import styles from './Sidebar.module.scss'

type TSidebarProps = {
  state: {
    sidebarNavLink: Array<TSidebarNavLink>
    friends: Array<TSidebarFriends>
  }
}

export function Sidebar(props: TSidebarProps) {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          {props.state.sidebarNavLink.map(item => (
            <NavLinkItem
              key={item.id}
              to={item.path}
              className={styles.menuItem}
              classActive={styles.active}
              value={item.value}
            />
          ))}
        </ul>
        <Friends friends={props.state.friends} />
      </nav>
    </div>
  )
}
