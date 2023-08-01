import React from 'react'
import '../styles/Main.css'
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FormattedMessage } from 'react-intl';



const Main = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('#Siamo', {
        x: -80,
        opacity: 0
    }, {
        opacity: 1,
        duration: 2,
        x:0,
        delay:1,
        
    }),
    gsap.fromTo('#g2', {
      x: -80,
      opacity: 0
  }, {
      opacity: 1,
      duration: 2,
      x:0,
      delay:2.5,
      
  })
    
}, [])
  return (
  <div id='Home' className='main-container'>
    <div  className='main-texts'>
    <h1 ><span><FormattedMessage id='main.welcome' /></span><FormattedMessage id='main.siamo' /></h1>
    <p id='g2'><FormattedMessage id='main.place' /><span><FormattedMessage id='main.sports' /> </span> </p>
    </div>
  </div>
  )
}

export default Main