import React from 'react';
import '../styles/What.css'
import man2 from '../assets/man2.png'
import woman3 from '../assets/woman4.png'
import ball4 from '../assets/ball7.png'
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FormattedMessage } from 'react-intl';




const What = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('#b', {
            scale: 2,
            opacity: 0
        }, {
            opacity: 1,
            scale: 1,
            duration: 3,
            scrollTrigger: {
                trigger: ('#b'),
                start: +1200
            }
        })

    }, [])


    return (
        <>
            <div id='Siamo' className='what-container'>
                <div className='div1'>
                    <p ><FormattedMessage id='what.1' /></p>
                </div>
                <div className='div2'>
                    <p ><FormattedMessage id='what.2' /></p>
                </div>

            </div>
            <div className='div3'>
                <img src={man2} alt="soccer player" />
                <div>
                    <p><FormattedMessage id='what.join' /><span><FormattedMessage id='what.siamo' /></span><FormattedMessage id='what.part' /></p>
                    <img id='b' src={ball4} alt="soccer ball" />
                </div>
                <img className='wom' src={woman3} alt="woman soccer player" />
            </div>
            <div id='Community'></div>
            <div className='community' >
                <h3 ><span><FormattedMessage id='com.siamo' /></span><FormattedMessage id='com.com' /> </h3>
            </div>
        </>
    )
}

export default What