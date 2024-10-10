import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faFigma,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            My full name is <b>Andi Muh. Aizar Farhan</b>, I am a final-year student 
            at Binus University, majoring in Information Systems Accounting & 
            Auditing. I have a strong passion for the IT industry, particularly 
            in the systems development, applications, and websites.
            Additionally, I have a deep interest in the field of auditing, with
            a special focus on IT Auditing and business.
          </p>
          <p>
            I am confident in my abilities and possess a strong desire to
            continuously expand my knowledge and skills. I believe that every
            experience contributes significantly to personal and professional
            growth.
          </p>
          <p>
            If I were to describe myself, I would say I am a cheerful person who
            enjoys interacting with others. I adapt easily to new environments
            and enjoy making connections with people. In my spare time, I love
            playing badminton and video games, and I am truly obsessed with
            technology.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faFigma} color="#F24E1E " />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A1D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
