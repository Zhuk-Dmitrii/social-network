import styles from './FriendItem.module.scss'

type TFriendItemProps = {
  img: string
  value: string
}

export function FriendItem(props: TFriendItemProps) {
  return (
    <div className={styles.friend}>
      <img src={props.img} alt="friend" />
      <span>{props.value}</span>
    </div>
  )
}
