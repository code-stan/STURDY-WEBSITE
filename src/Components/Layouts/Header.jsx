import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header className="header">
        <nav className="nav">
            <NavLink to="/" className="nav__link logo" translate="no">
                STURDY
            </NavLink>
            <div className="nav-section-parent">
                <div className="left-section">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="watch" className="nav__link">
                                WATCH
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="clients" className="nav__link">
                                CLIENTS
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="right-section">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="info" className="nav__list">
                                INFO
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header