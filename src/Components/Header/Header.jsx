import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './header.css'
import {FaGithub} from 'react-icons/fa'
const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="http://github.com/yasinyagmur" target="blank">Link For Recipe Project <FaGithub size={20}/></a>
        </li>
      </ul>
      <ul>
        <li><NavLink to='home' >Recipe</NavLink></li>
        <li><NavLink to='about' >About</NavLink></li>
        <li><Link to='/' >Logout</Link></li>
      </ul>
    </header>
  )
}

export default Header