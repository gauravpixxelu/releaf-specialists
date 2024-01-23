import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
export default function TestimonialSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000 // Set the autoplay speed in milliseconds (e.g., 2000 for 2 seconds)  
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="slider-testimonial-box">
                    <Image src="/images/homepage/inverted.svg" width={42} height={30} alt="inverted" />
                    <p class="page-description">They were fantastic! Super helpful, very quick and easy. They told me my card would take 10-15 business days to get to me, but it only took 3! I could not be more pleased. And they price match for future annual renewal costs!</p>
                    <div className="testimonial-listing">
                        <div className="test-name">
                            <span>Schenley Sullivan</span>
                            <p>Verified Customer</p>
                        </div>
                        <div className="testimonila-star">
                            <Image src="/images/homepage/star.png" width={154} height={24} alt="check" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slider-testimonial-box">
                    <Image src="/images/homepage/inverted.svg" width={42} height={30} alt="inverted" />
                    <p class="page-description">They were fantastic! Super helpful, very quick and easy. They told me my card would take 10-15 business days to get to me, but it only took 3! I could not be more pleased. And they price match for future annual renewal costs!</p>
                    <div className="testimonial-listing">
                        <div className="test-name">
                            <span>Schenley Sullivan</span>
                            <p>Verified Customer</p>
                        </div>
                        <div className="testimonila-star">
                            <Image src="/images/homepage/star.png" width={154} height={24} alt="check" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slider-testimonial-box">
                    <Image src="/images/homepage/inverted.svg" width={42} height={30} alt="inverted" />
                    <p class="page-description">They were fantastic! Super helpful, very quick and easy. They told me my card would take 10-15 business days to get to me, but it only took 3! I could not be more pleased. And they price match for future annual renewal costs!</p>
                    <div className="testimonial-listing">
                        <div className="test-name">
                            <span>Schenley Sullivan</span>
                            <p>Verified Customer</p>
                        </div>
                        <div className="testimonila-star">
                            <Image src="/images/homepage/star.png" width={154} height={24} alt="check" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slider-testimonial-box">
                    <Image src="/images/homepage/inverted.svg" width={42} height={30} alt="inverted" />
                    <p class="page-description">They were fantastic! Super helpful, very quick and easy. They told me my card would take 10-15 business days to get to me, but it only took 3! I could not be more pleased. And they price match for future annual renewal costs!</p>
                    <div className="testimonial-listing">
                        <div className="test-name">
                            <span>Schenley Sullivan</span>
                            <p>Verified Customer</p>
                        </div>
                        <div className="testimonila-star">
                            <Image src="/images/homepage/star.png" width={154} height={24} alt="check" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slider-testimonial-box">
                    <Image src="/images/homepage/inverted.svg" width={42} height={30} alt="inverted" />
                    <p class="page-description">They were fantastic! Super helpful, very quick and easy. They told me my card would take 10-15 business days to get to me, but it only took 3! I could not be more pleased. And they price match for future annual renewal costs!</p>
                    <div className="testimonial-listing">
                        <div className="test-name">
                            <span>Schenley Sullivan</span>
                            <p>Verified Customer</p>
                        </div>
                        <div className="testimonila-star">
                            <Image src="/images/homepage/star.png" width={154} height={24} alt="check" />
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
}