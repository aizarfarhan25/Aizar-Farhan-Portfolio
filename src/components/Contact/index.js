import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in opportunities within Software Engineering, IT
            Auditing, and Quality Assurance, especially in challenging and
            large-scale projects. If you have any other inquiries or different
            opportunities, please feel free to reach out to me through my social
            media channels below.
          </p>
          <div className="contact-list">
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/andi-muh-aizar-farhan-a47a18292"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#0A66C2" />
                  <div className='font-hover-icon'>Andi Muh. Aizar Farhan</div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/aizarfarhan25"
                >
                  <FontAwesomeIcon icon={faGithub} color="#f9f9f9" />
                  <div className='font-hover-icon'>Aizar Farhan</div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/an.frhann/"
                >
                  <FontAwesomeIcon icon={faInstagram} color="#E4405F" />
                  <div className='font-hover-icon'>an.frhann</div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:andiaizarfarhan@gmail.com"
                >
                  <FontAwesomeIcon icon={faEnvelope} color="#D14836" />
                  <div className='font-hover-icon'>Aizar Farhan</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
