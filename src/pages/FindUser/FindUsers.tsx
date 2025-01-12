import { User } from './User'
import { TFindUsersData } from '../../types/type'
import styles from './FindUsers.module.scss'

type TProps = {
  findUsers: Array<TFindUsersData>
  follow: (id: string) => void
  unfollow: (id: string) => void
}

export function FindUsers(props: TProps) {
  const follow = (id: string) => {
    props.follow(id)
  }

  const unfollow = (id: string) => {
    props.unfollow(id)
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Users</h3>
      <div className={styles.container}>
        {props.findUsers.map(user => {
          return <User key={user.id} data={user} follow={follow} unfollow={unfollow} />
        })}
      </div>
    </div>
  )
}
