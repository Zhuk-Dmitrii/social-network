import { MessageItem } from '../../components/MessageItem'
import { NavLinkItem } from '../../components/NavLinkItem'
import { PATHS } from '../../router/path'
import styles from './Dialogs.module.scss'

export function Dialogs() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.container}>
        <div className={styles.dialogs}>
          <ul className={styles.dialogList}>
            <NavLinkItem
              to={`${PATHS.DIALOGS}/1`}
              className={styles.dialogItem}
              classActive={styles.active}
              value="Андрей"
              flag="dialogs"
            />
            <NavLinkItem
              to={`${PATHS.DIALOGS}/2`}
              className={styles.dialogItem}
              classActive={styles.active}
              value="Ольга"
              flag="dialogs"
            />
            <NavLinkItem
              to={`${PATHS.DIALOGS}/3`}
              className={styles.dialogItem}
              classActive={styles.active}
              value="Света"
              flag="dialogs"
            />
            <NavLinkItem
              to={`${PATHS.DIALOGS}/4`}
              className={styles.dialogItem}
              classActive={styles.active}
              value="Игорь"
              flag="dialogs"
            />
            <NavLinkItem
              to={`${PATHS.DIALOGS}/5`}
              className={styles.dialogItem}
              classActive={styles.active}
              value="Вася"
              flag="dialogs"
            />
          </ul>
        </div>
        <div className={styles.messages}>
          <ul className={styles.messagesList}>
            <MessageItem message="Hi!" />
            <MessageItem message="Hello!" />
            <MessageItem message="Как дела?" />
            <MessageItem message="Хорошо! У тебя как?" />
            <MessageItem message="Отлично!" />
          </ul>
        </div>
      </div>
    </div>
  )
}
