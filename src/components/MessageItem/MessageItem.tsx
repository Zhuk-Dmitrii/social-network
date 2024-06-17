import avatar from '../../assets/icon/user.png'
import styles from './MessageItem.module.scss'

type TProps = {
  message: string
}

export function MessageItem({ message }: TProps) {
  return (
    <li className={styles.messageItem}>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <span className={styles.messageText}>{message}</span>
    </li>
  )
}
