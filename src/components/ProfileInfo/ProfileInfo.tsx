import styles from './ProfileInfo.module.scss'
import ImgProfile from '../../assets/img/profile-img.jpg'

export function ProfileInfo() {
  return (
    <>
      <div className={styles.header}>
        <img src={ImgProfile} alt="" />
      </div>
      <div className={styles.info}>Avatar + info</div>
    </>
  )
}
