import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import '../styles/header.css'
import es from '../assets/es.png'
import en from '../assets/en.png'
import da from '../assets/da.png'
import { BiSolidContact } from 'react-icons/bi';
import { GiWorld } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import { langContext } from '../context/langContext';
import { FormattedMessage } from 'react-intl';






const Header = () => {

  const language = useContext(langContext);
  const [selectedOption, setSelectedOption] = useState('option1');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <header>
      <div>
        <a href="#Home"><img className='img-logo' src={logo} alt="siamo-logo" /></a>
      </div>
      <nav className='nav-header'>
        <a className='what' href="#Siamo"><FormattedMessage id='header.what' /><GiWorld /></a>
        <a href="#Community"><FormattedMessage id='header.community' /> <IoIosPeople /></a>
        <a href="#Contact"><FormattedMessage id='header.contact' /><BiSolidContact /></a>
      </nav>
      <div className='languages'>
        <select value={selectedOption} onChange={handleChange}>

          <option value="option1" onClick={() => language.setLanguage('en-GB')}><FormattedMessage id='header.lang-en' /> </option>
          <option value="option2" onClick={() => language.setLanguage('es-ES')}><FormattedMessage id='header.lang-es' /></option>
          <option value="option3" onClick={() => language.setLanguage('da-DK')} ><FormattedMessage id='header.lang-da' /></option>
        </select>
        <div>
          {selectedOption === 'option2' && <img className='flag' src={es} />}
          {selectedOption === 'option1' && <img className='flag' src={en} />}
          {selectedOption === 'option3' && <img className='flag' src={da} />}

        </div>
      </div>
      <div className="languages-mob">
        <div onClick={() => language.setLanguage('en-GB')} >
          <img className='flag' src={en} />
          <p>EN</p>
        </div >
        <div onClick={() => language.setLanguage('es-ES')}>
          <img className='flag' src={es} />
          <p>ES</p>
        </div>
        <div onClick={() => language.setLanguage('da-DK')} >
          <img className='flag' src={da} />
          <p>DA</p>
        </div>
      </div>




    </header >
  )
}

export default Header