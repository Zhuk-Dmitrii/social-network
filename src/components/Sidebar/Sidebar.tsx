import { NavLink } from 'react-router-dom'

import { PATHS } from '../../router/path'
import styles from './Sidebar.module.scss'

export function Sidebar() {
  function setActive({ isActive }: { isActive: boolean }) {
    return isActive ? styles.active : ''
  }

  return (
    <div className={styles.sidebar}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <NavLink className={setActive} to={PATHS.PROFILE}>
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
          </li>
        </ul>
      </nav>
    </div>
  )
}
