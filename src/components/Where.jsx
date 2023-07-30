import React from 'react'
import '../styles/Where.css'




const Where = () => {
    return (
   
        <div className='where-container'>
            <div className='where-texts'>
                <h3>Find us here: </h3>
            </div>
            <div className="where-maps">
                <div className='div-maps'>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71065.13000881928!2d10.18197445!3d56.17810395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c4cb15397788b%3A0x8c4dd7d9912ea2af!2sAarhus%2C%20Dinamarca!5e0!3m2!1ses!2ses!4v1690455557187!5m2!1ses!2ses" loading="lazy" ></iframe>
                    <p>Aarhus, Denmark</p>
                </div>
                <div className='div-maps'>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449683.9449063162!2d-16.85232064968859!3d28.293603624849034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4029effe8682ed%3A0xb01a4bf1c84baf3c!2sTenerife!5e0!3m2!1ses!2ses!4v1690455878551!5m2!1ses!2ses" loading="lazy" ></iframe>
                    <p>Tenerife, Spain</p>
                </div>

            </div>
           
        </div>
        
     
    )
}

export default Where