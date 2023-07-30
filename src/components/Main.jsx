import React from 'react'
import '../styles/Main.css'
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Main = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('#g1', {
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
  <div className='main-container'>
    <div  className='main-texts'>
    <h1 id='g1'><span>Welcome to</span> Siamo Street!</h1>
    <p id='g2'>A place where everybody is welcome to be part of this growing family, united by our passion: <span>sports </span> </p>
    </div>
  </div>
  )
}

export default Main