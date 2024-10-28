import { Link, NavLink } from 'react-router-dom'
import './index.scss'
// import LogoS from '../../assets/images/logo-a.png'
import LogoS from '../../assets/images/font-A.png'
import LogoSubtitle from '../../assets/images/logo-sub1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faHome, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaProjectDiagram, FaUser, FaHome} from "react-icons/fa";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Aizar Farhan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FaHome color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FaUser color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="project-link"
        to="/project"
      >
        <FaProjectDiagram color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FaEnvelope color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/andi-muh-aizar-farhan-a47a18292"
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
  </div>
)

export default Sidebar
