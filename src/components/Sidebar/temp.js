import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/font-A.png'
import LogoSubtitle from '../../assets/images/logo-sub1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaProjectDiagram,
  FaUser,
  FaHome,
} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const temp = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="aizar" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FaHome color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FaUser color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FaProjectDiagram color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FaEnvelope color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/andi-muh-aizar-farhan-a47a18292"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className='icon'/>
          </a>
        </li>
        <li>
        <a  
          target="_blank"
          rel="noreferrer"
          href="https://github.com/aizarfarhan25"
        >
          <FaGithub className="icon" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/an.frhann/"
        >
          <FaInstagram className="icon"/>
        </a>
      </li>
      </ul>
      <FaBars
          onClick={() => setShowNav(true)}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default temp
