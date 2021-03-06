import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import './header.module.scss';
import headerStyles from './header.module.scss';

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title,
          author
        }
      }
    }
  `);

  return (
  <header className={headerStyles.header}>
    <h1>
      <Link to="/" className={headerStyles.title}>
        {data.site.siteMetadata.title}
      </Link>
    </h1>
    <nav>
      <ul className={headerStyles.navList}>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
