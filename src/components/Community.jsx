import React from 'react'
import Slider from "react-slick";
import { dataImages } from '../data';
import '../styles/Community.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Community = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>

            <div className='slider'>

                <Slider {...settings}>
                    {dataImages.map((image, index) => {
                        return <img key={index} className="img-car" src={image} alt="siamo community" />
                    })}
                </Slider>
            </div>
        </>
    )
}

export default Community