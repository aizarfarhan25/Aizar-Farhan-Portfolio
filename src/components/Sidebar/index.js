import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/font-A.png'
import LogoSubtitle from '../../assets/images/logo-sub1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaProjectDiagram,
  FaUser,
  FaHome,
  FaBars,
} from 'react-icons/fa'
import { MdClose } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom'
// import { faEnvelope, faHome, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
// import LogoS from '../../assets/images/logo-a.png'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Aizar Farhan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FaHome color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FaUser color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project-link"
          to="/project"
          onClick={() => setShowNav(false)}>
          <FaProjectDiagram color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}>
          <FaEnvelope color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/andi-muh-aizar-farhan-a47a18292"
          >
            <FaLinkedin className="icon" />
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
            <FaInstagram className="icon" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
