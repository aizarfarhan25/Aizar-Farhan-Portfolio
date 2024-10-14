import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import ProjectCard from './Project Card/ProjectCard'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className="text-zones">
          <div className="text-width">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k', 's']}
                idx={15}
              />
            </h1>
            <p>
              <b>Welcome to My Project Gallary</b>
              <br />
              Explore the collection of my professional and personal works,
              showcasing my passion for development, creativity, and
              problem-solving. Each project reflects my dedication to innovation
              and growth in the field of technology and design.
            </p>
          </div>
          <ProjectCard />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}
export default Project
