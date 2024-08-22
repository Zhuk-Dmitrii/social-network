import { FriendItem } from './FriendItem'
import { TSidebarFriends } from '../../../types/type'
import styles from './Friends.module.scss'

type TFriendsProps = {
  friends: Array<TSidebarFriends>
}

export function Friends(props: TFriendsProps) {
  const arrayOfThreeFriends = props.friends.slice(0, 3)

  return (
    <div className={styles.friends}>
      <span className={styles.title}>Friends</span>
      <div className={styles.friendItem}>
        {arrayOfThreeFriends.map(item => (
          <FriendItem key={item.id} img={item.img} value={item.value} />
        ))}
      </div>
    </div>
  )
}
