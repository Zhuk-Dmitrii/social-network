import { User } from './User'
import styles from './FindUsers.module.scss'

export function FindUsers() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Users</h3>
      <div className={styles.container}>
        <User />
      </div>
    </div>
  )
}
