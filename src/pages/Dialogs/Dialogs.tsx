import { MessageItem } from '../../components/MessageItem'
import { NavLinkItem } from '../../components/NavLinkItem'
import { PATHS } from '../../router/path'
import { usersDialogsData, messageData } from './data'
import styles from './Dialogs.module.scss'

export function Dialogs() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.container}>
        <div className={styles.dialogs}>
          <ul className={styles.dialogList}>
            {usersDialogsData.map(item => (
              <NavLinkItem
                key={item.id}
                to={`${PATHS.DIALOGS}/${item.id}`}
                className={styles.dialogItem}
                classActive={styles.active}
                value={item.name}
                flag="dialogs"
              />
            ))}
          </ul>
        </div>
        <div className={styles.messages}>
          <ul className={styles.messagesList}>
            {messageData.map(item => (
              <MessageItem key={item.id} message={item.message} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
