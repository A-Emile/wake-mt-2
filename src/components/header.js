import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="h-20 px-10 flex items-center">
    <div className="text-2xl flex-grow font-semibold">WAKE<font className="font-thin">TOOLS</font></div>
    <div className="flex gap-8 font-semibold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  </header>
)

export const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className={`hover:text-fuchsia-400 text-lg opacity-80`}
    >
      {children}
    </Link>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
