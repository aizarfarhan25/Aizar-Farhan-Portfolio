import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/logo-a.png'
import LogoTitle from '../../assets/images/font-A.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'z', 'a', 'r']
  const jobArray = ['W', 'e','b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ', '&', ' ', 'Q', 'u','a', 'l', 'i', 't', 'y', ' ', 'A', 's', 's', 'u', 'r', 'a', 'c', 'e']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // Clean up the timeout when the component unmounts
    // return () => clearTimeout(timeoutId);
  }, []);
  
  


  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass} _12`}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _12`}>,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
          <br />
        </h1>
        <h2>Final Year Student / QA Internship</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
    </>   
  )
}

export default Home
