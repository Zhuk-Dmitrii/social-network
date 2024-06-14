import { NavLinkItem } from '../NavLinkItem'
import { PATHS } from '../../router/path'
import styles from './Sidebar.module.scss'

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          <NavLinkItem
            to={PATHS.PROFILE}
            className={styles.menuItem}
            classActive={styles.active}
            value="Profile"
          />
          <NavLinkItem
            to={PATHS.DIALOGS}
            className={styles.menuItem}
            classActive={styles.active}
            value="Messages"
          />
          <NavLinkItem
            to={PATHS.NEWS}
            className={styles.menuItem}
            classActive={styles.active}
            value="News"
          />
          <NavLinkItem
            to={PATHS.MUSIC}
            className={styles.menuItem}
            classActive={styles.active}
            value="Music"
          />
          <NavLinkItem
            to={PATHS.SETTINGS}
            className={styles.menuItem}
            classActive={styles.active}
            value="Settings"
          />
          {/* <NavLink className={setActive} to={PATHS.PROFILE}>
              Profile
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink className={setActive} to={PATHS.DIALOGS}>
              Messages
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink className={setActive} to={PATHS.NEWS}>
              News
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink className={setActive} to={PATHS.MUSIC}>
              Music
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink className={setActive} to={PATHS.SETTINGS}>
              Settings
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
