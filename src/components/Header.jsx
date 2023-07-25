import React from 'react'
import logo from '../assets/logo.png'
import '../styles/header.css'
import es from '../assets/es.png'
import { AiFillCaretDown } from 'react-icons/ai';


const Header = () => {
  return (
    <header>
      <div>
      <img className='img-logo' src={logo} alt="siamo-logo" />
      </div>
        <nav className='nav-header'>
          <a href="#">Inicio</a>
          <a href="#">Eventos</a>
          <a href="#">Contacto</a>
        </nav>
        <div className='languages'>
        <img className='img-flag' src={es} alt="spanish-language" />
        <AiFillCaretDown className='dropdown'/>
        </div>
    </header>
  )
}

export default Header