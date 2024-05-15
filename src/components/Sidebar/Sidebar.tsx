import styles from './Sidebar.module.scss'

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <a className={styles.itemLink} href="#">
              Profile
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.itemLink} href="#">
              Messages
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.itemLink} href="#">
              News
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.itemLink} href="#">
              Music
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.itemLink} href="#">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
