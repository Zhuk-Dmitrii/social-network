import { Link } from 'react-router-dom'

import { PATHS } from '../../router/path'
import styles from './Sidebar.module.scss'

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <Link className={styles.itemLink} to={PATHS.PROFILE}>
              Profile
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.itemLink} to={PATHS.DIALOGS}>
              Messages
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.itemLink} to={PATHS.NEWS}>
              News
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.itemLink} to={PATHS.MUSIC}>
              Music
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.itemLink} to={PATHS.SETTINGS}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
