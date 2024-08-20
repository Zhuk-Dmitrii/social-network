import { MessageItem } from '../../components/MessageItem'
import { NavLinkItem } from '../../components/NavLinkItem'
import { PATHS } from '../../router/path'
import { TUsersDialogsData, TMessageData } from '../../index'
import styles from './Dialogs.module.scss'

type TDialogsProps = {
  usersDialogsData: Array<TUsersDialogsData>
  messageData: Array<TMessageData>
}

export function Dialogs(props: TDialogsProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.container}>
        <div className={styles.dialogs}>
          <ul className={styles.dialogList}>
            {props.usersDialogsData.map(item => (
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
            {props.messageData.map(item => (
              <MessageItem key={item.id} message={item.message} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
