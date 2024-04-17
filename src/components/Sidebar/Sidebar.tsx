export function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="menu">
        <ul className="menu__items">
          <li className="menu__item">
            <a className="menu__item_link" href="#">
              Profile
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__item_link" href="#">
              Messages
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__item_link" href="#">
              News
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__item_link" href="#">
              Music
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__item_link" href="#">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
