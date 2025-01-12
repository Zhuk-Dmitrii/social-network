import { TFindUsersData } from '../../../types/type'
import avatar from '../../../assets/icon/user.png'
import styles from './User.module.scss'

type TProps = {
  data: TFindUsersData
  follow: (id: string) => void
  unfollow: (id: string) => void
}

export function User(props: TProps) {
  return (
    <div className={styles.user}>
      <div className={styles.userAvatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.userInfo}>
        <p className={styles.userName}>{props.data.userName}</p>
        <p className={styles.userLocation}>
          {(props.data.location.city, props.data.location.country)}
        </p>
        <p className={styles.userStatus}>{props.data.status}</p>
      </div>
      {props.data.followed ? (
        <button className={styles.unsubscribe} onClick={() => props.unfollow(props.data.id)}>
          Unfollow
        </button>
      ) : (
        <button className={styles.subscribe} onClick={() => props.follow(props.data.id)}>
          Follow
        </button>
      )}
    </div>
  )
}
