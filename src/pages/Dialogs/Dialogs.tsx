import { ChangeEvent, FormEvent } from 'react'

import { MessageItem } from '../../components/MessageItem'
import { NavLinkItem } from '../../components/NavLinkItem'
import { PATHS } from '../../router/path'
import { TUsersDialogsData, TMessageData } from '../../types/type'
import styles from './Dialogs.module.scss'

type TDialogsProps = {
  usersDialogsData: Array<TUsersDialogsData>
  messageData: Array<TMessageData>
  messageText: string
  addNewMessage: () => void
  changeInputMessage: (value: string) => void
}

export function Dialogs(props: TDialogsProps) {
  const addNewMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    props.addNewMessage()
  }

  const changeInputMessage = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    props.changeInputMessage(value)
  }

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
          <form className={styles.containerForInputMessage} onSubmit={addNewMessage}>
            <input
              className={styles.inputMessage}
              onChange={changeInputMessage}
              value={props.messageText}
              type="text"
            />
            <button className={styles.btnSendMessage} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
