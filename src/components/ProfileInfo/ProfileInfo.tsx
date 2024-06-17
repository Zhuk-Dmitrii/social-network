import styles from './ProfileInfo.module.scss'
import ImgProfile from '../../assets/img/profile-img.jpg'
import avatar from '../../assets/icon/user.png'
import { UserInfoItem } from './UserInfoItem/UserInfoItem'

export function ProfileInfo() {
  return (
    <>
      <div className={styles.header}>
        <img src={ImgProfile} alt="baner" />
      </div>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.userInfo}>
          <h3 className={styles.userName}>Zhuk Dmitry</h3>
          <UserInfoItem title="Date of Birth " value="29.08.1993" />
          <UserInfoItem title="City: " value="Minsk" />
          <UserInfoItem title="Education: " value="TeachMeSkills" />
          <UserInfoItem title="Web Site: ">
            <a href="https://www.linkedin.com/in/dmitriy-zhuk/" target="_blank">
              https://www.linkedin.com/in/dmitriy-zhuk/
            </a>
          </UserInfoItem>
        </div>
      </div>
    </>
  )
}
