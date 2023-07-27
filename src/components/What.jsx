import React from 'react';
import '../styles/What.css'
import man2 from '../assets/man2.png'
import woman3 from '../assets/woman3.png'
import ball4 from '../assets/ball7.png'
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";




const What = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('#b', {
            scale:2,
            opacity:0
        }, {
            opacity:1,
            scale:1,
            duration: 3,
            scrollTrigger: {
                trigger: ('#b'),
                start: +1200
            }  
        })
        
    }, [])


    return (
        <>
            <div className='what-container'>
                <div className='div1'>
                <p >Through tournaments, cultural exchanges, and charitable initiatives, Siamo brings together individuals from diverse backgrounds, proving that soccer can bridge gaps and foster a sense of belonging like no other sport.</p>
                </div>
                <div className='div2'>
                <p >Siamo is a remarkable organization that hosts soccer events for communities globally. Our mission is simple: to create a worldwide soccer family, promoting unity and understanding among all. </p>
                </div>
                
            </div>
            <div className='div3'>
                <img src={man2} alt="soccer player" />
                <div>
                <p> Join Siamo and be part of this extraordinary global soccer movement!</p>
                <img id='b' src={ball4} alt="soccer ball" />
                </div>
                <img src={woman3} alt="woman soccer player" />
            </div>
        </>
    )
}

export default What