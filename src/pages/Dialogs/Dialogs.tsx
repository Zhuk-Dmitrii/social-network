import React, { RefObject } from 'react'

import { MessageItem } from '../../components/MessageItem'
import { NavLinkItem } from '../../components/NavLinkItem'
import { PATHS } from '../../router/path'
import { TUsersDialogsData, TMessageData } from '../../types/type'
import styles from './Dialogs.module.scss'

type TDialogsProps = {
  state: {
    usersDialogsData: Array<TUsersDialogsData>
    messageData: Array<TMessageData>
  }
}

export function Dialogs(props: TDialogsProps) {
  const refInput: RefObject<HTMLInputElement> = React.createRef()

  function handleClickBtnSend() {
    if (refInput.current) {
      const value = refInput.current.value
      console.log(value)

      refInput.current.value = ''
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.container}>
        <div className={styles.dialogs}>
          <ul className={styles.dialogList}>
            {props.state.usersDialogsData.map(item => (
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
            {props.state.messageData.map(item => (
              <MessageItem key={item.id} message={item.message} />
            ))}
          </ul>
          <div className={styles.containerForInputMessage}>
            <input className={styles.inputMessage} ref={refInput} type="text" />
            <button className={styles.btnSendMessage} onClick={handleClickBtnSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
