import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="https://cdn-icons-png.flaticon.com/128/11732/11732932.png" alt="#" />
      </div>
    </header>
  )
}
