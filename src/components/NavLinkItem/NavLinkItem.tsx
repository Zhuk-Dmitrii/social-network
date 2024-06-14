import { NavLink } from 'react-router-dom'

type TProps = {
  to: string
  className?: string
  classActive?: string
  value?: string
}

export function NavLinkItem({ to, className, classActive = '', value }: TProps) {
  function setActive({ isActive }: { isActive: boolean }): string {
    return isActive ? classActive : ''
  }

  return (
    <li className={className}>
      <NavLink to={to} className={setActive}>
        {value}
      </NavLink>
    </li>
  )
}
