import { NavLink } from 'react-router-dom'

import styles from './NavLinkItem.module.scss'

type TProps = {
  to: string
  className?: string
  classActive?: string
  value?: string
  flag?: string
}

export function NavLinkItem({ to, className, classActive = '', value, flag = '' }: TProps) {
  function setActive({ isActive }: { isActive: boolean }): string {
    return isActive ? classActive : ''
  }

  return (
    <li className={className}>
      {flag === 'dialogs' && <span className={styles.indicator}></span>}
      <NavLink to={to} className={setActive}>
        {value}
      </NavLink>
    </li>
  )
}
