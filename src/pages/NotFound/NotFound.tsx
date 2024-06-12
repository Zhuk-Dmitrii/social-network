import styles from './NotFound.module.scss'

export function NotFound() {
  return (
    <div className={styles.error}>
      <h1>Oops!</h1>
      <p>Такой страницы не найдено!</p>
    </div>
  )
}
