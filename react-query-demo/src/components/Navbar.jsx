import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav style = {{
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        paddingLeft: '2rem',
        paddingTop: '2rem',
        position: 'absolute',
        top: '0rem',
    }}>
        <Link to = '/'> Home </Link>
        <Link to = 'Posts'> Posts </Link>
    </nav>
  )
}

export default Navbar;