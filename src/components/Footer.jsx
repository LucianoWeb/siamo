import React from 'react';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <p><IoLogoWhatsapp  style={{color:"#25D366"}}/> WhatsApp: +45 91 42 71 43 </p>
                <p><MdEmail style={{color: "#bf360c"}}/> Email: siamoteamdk@gmail.com</p>
            </div>
            <div className="social">
                <a target="blank" href="https://www.instagram.com/siamostreet/?hl=es"><AiFillInstagram style={{color: "#ed02dc"}}/> @siamostreet</a>
                <a target="blank" href="https://www.facebook.com/SiamoFAarhus"><FaFacebook   style={{color: "#1679f1"}}/> Siamo Street</a>
            </div>
        </div>
    )
}

export default Footer