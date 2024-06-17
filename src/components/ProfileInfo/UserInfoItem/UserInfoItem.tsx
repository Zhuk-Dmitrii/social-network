import styles from './UserInfoItem.module.scss'

type TProps = {
  title: string
  value?: string
  children?: React.ReactNode
}

export function UserInfoItem({ title, value, children }: TProps) {
  return (
    <p className={styles.userInfoItem}>
      <span>{title}</span>
      {value}
      {children}
    </p>
  )
}
