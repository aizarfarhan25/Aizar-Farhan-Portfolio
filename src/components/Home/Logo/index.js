import './index.scss'
import LogoS from '../../../assets/images/avaProfile.png'
import LogoM from '../../../assets/images/Aizar.png'
import { useEffect, useRef } from 'react'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoM} alt="Ava" />
    </div>
  )
}
export default Logo
