
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { APIurl } from "../APIurl";


export default function TestimonialSlider() {
    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        const fetchTestimonial = async () => {
            try {
                const response = await fetch(`${APIurl}all-testimonial-list`);
                const data = await response.json();
                setTestimonial(data.data);
            } catch (error) {
                console.error('Error fetching testimonial list:', error);
            }
        };

        fetchTestimonial();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    





    return (

        <Slider {...settings}>

            {testimonial.map(testimonial => (
                <div key={testimonial.id}>
                    <div className="slider-testimonial-box" >
                        <Image src="/images/homepage/inverted.svg" width={42} height={30} alt="inverted" />
                        <p class="page-description">{testimonial.experience}</p>
                        <div className="testimonial-listing">
                            <div className="test-name">
                                <span>{testimonial.name}</span>
                                <p>{testimonial.season} - {testimonial.location}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            ))}

        </Slider>
    );
}