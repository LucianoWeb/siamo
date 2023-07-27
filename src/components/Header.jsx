import React from 'react'
import logo from '../assets/logo.png'
import '../styles/header.css'
import es from '../assets/es.png'
import { AiFillCaretDown } from 'react-icons/ai';
import { BiSolidContact } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { MdEmojiEvents } from 'react-icons/md';



const Header = () => {
  return (
    <header>
      <div>
      <img className='img-logo' src={logo} alt="siamo-logo" />
      </div>
        <nav className='nav-header'>
          <a href="#">What's Siamo <AiOutlineHome/></a>
          <a href="#">Events <MdEmojiEvents/></a>
          <a href="#">Contacto <BiSolidContact/></a>
        </nav>
        <div className='languages'>
        <img className='img-flag' src={es} alt="spanish-language" />
        <AiFillCaretDown className='dropdown'/>
        </div>
    </header>
  )
}

export default Header