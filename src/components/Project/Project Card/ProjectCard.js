import React from 'react'
import './ProjectCard.scss'
import { link } from 'framer-motion/client'

const Project = () => {
  const projects = [
    {
      title: 'LaporAja',
      company: 'Project Binus',
      description:
        'is a mobile application that enables users to report criminal activities quickly and safely.',
      time: '2023',
      link: 'https://www.figma.com/proto/FIUgohVL7E5eeFp9V2X5cV/ABAD-PROJECT?page-id=0%3A1&node-id=17-58&node-type=canvas&viewport=796%2C350%2C0.35&t=JVJFuKUqHcyQhgEX-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A2&show-proto-sidebar=1',
    },
    {
      title: 'PlantPedia',
      company: 'Project Binus',
      description:
        'is a mobile application that provides users with information about various types of plants.',
      time: '2023',
      link: 'https://www.figma.com/proto/ztoeI7e5lYQfUyvJtM2x0e/Final-Project-UI-UX-(Copy)?page-id=0%3A1&node-id=2-285&node-type=canvas&viewport=548%2C435%2C0.37&t=tlVegI9UMbAs9Toy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1',
    },
    {
      title: 'EasyTrip',
      company: 'HTML, CSS, JavaScript',
      description:
        'is a responsive website designed to showcase the beauty and diversity of Indonesia.',
      time: '2024',
      link: 'https://easytrip-iihjijw7y-aizar-farhans-projects.vercel.app',
    },
    {
      title: 'Coming Soon..',
      company: '...',
      description: 'This project is not finished yet.',
      time: 'Coming Soon',
    },
    // Add more project objects as needed
  ]

  return (
    <div className="project-container project-margin">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-header">
            <span>{project.time}</span>
          </div>
          <div className="project-content">
            <h2>{project.title}</h2>
            <p>{project.company}</p>
            <p>{project.description}</p>
            <a href={project.link} target="_blank">
              <button>see more</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Project
