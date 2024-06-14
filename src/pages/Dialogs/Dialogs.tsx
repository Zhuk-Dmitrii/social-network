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
            />
            <NavLinkItem
              to={`${PATHS.DIALOGS}/2`}
              className={styles.dialogItem}
              classActive={styles.active}
              value="Ольга"
            />
            <NavLinkItem
              to={`${PATHS.DIALOGS}/3`}
              className={styles.dialogItem}
              classActive={styles.active}
              value="Света"
            />
            <NavLinkItem
              to={`${PATHS.DIALOGS}/4`}
              className={styles.dialogItem}
              classActive={styles.active}
              value="Игорь"
            />
            <NavLinkItem
              to={`${PATHS.DIALOGS}/5`}
              className={styles.dialogItem}
              classActive={styles.active}
              value="Вася"
            />
          </ul>
        </div>
        <div className={styles.messages}>
          <ul className={styles.messagesList}>
            <li className={styles.messageItem}>Hi!</li>
            <li className={styles.messageItem}>Hello</li>
            <li className={styles.messageItem}>Как дела?</li>
            <li className={styles.messageItem}>Хорошо! У тебя как?</li>
            <li className={styles.messageItem}>Отлично!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
