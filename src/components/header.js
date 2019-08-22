import React from "react"
import { Link } from 'gatsby'

const Header = () => (
  <header className="header">
    <div>
      <h1 className="header-text">
        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">Givi Weather</Link>
      </h1>
    </div>
  </header>
)
export default Header
