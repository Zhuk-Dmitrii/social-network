import styles from './Main.module.scss'

type TProps = {
  children: React.ReactNode
}

export function Main({ children }: TProps) {
  return <main className={styles.main}>{children}</main>
}
