import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function WestQualifyCommonSection() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 550, 
              settings: {
                slidesToShow: 2,
              }
            }
          ]
    };
    return (
        <>
            <section className="qualify-loction-five testimonial-section">
                <div className="container">
                    <div className="qualify-heading-top">
                        <h2>What Medical Conditions Qualify For a West Virginia Medical Marijuana Card?</h2>
                        <p>What are the Qualifying Medical Conditions in West Virginia for A Medical Marijuana Card?</p>
                    </div>

                    <div className="location-qualify-imges">
                        <Image src="/images/review/review-1.png" width={100} height={100} alt="check" />
                        <Image src="/images/review/review-2.png" width={100} height={100} alt="check" />
                        <Image src="/images/review/review-3.png" width={100} height={100} alt="check" />
                    </div>

                    <div className="slider-service ohio-section-slide">
                        <Slider {...settings}>
                            <div className="qualifying-box">
                                <Image src="/images/servicepage/Service-1.jpg" width={235} height={226} alt="check" />
                                <p>Amyotrophic Lateral Sclerosis (OH, PA WV)</p>
                            </div>

                            <div className="qualifying-box">
                                <Image src="/images/servicepage/Service-2.jpg" width={235} height={226} alt="check" />
                                <p>Anxiety (PA)</p>
                            </div>

                            <div className="qualifying-box">
                                <Image src="/images/servicepage/Service-3.jpg" width={235} height={226} alt="check" />
                                <p>Autism (PA)</p>
                            </div>

                            <div className="qualifying-box">
                                <Image src="/images/servicepage/Service-4.jpg" width={235} height={226} alt="check" />
                                <p>Cachexia (Wasting syndrome (OH))</p>
                            </div>

                            <div className="qualifying-box">
                                <Image src="/images/servicepage/Service-5.jpg" width={235} height={226} alt="check" />
                                <p>Cancer / Remission (OH, PA, WV)</p>
                            </div>

                            <div className="qualifying-box">
                                <Image src="/images/servicepage/Service-1.jpg" width={235} height={226} alt="check" />
                                <p>Cancer / Remission (OH, PA, WV)</p>
                            </div>

                            <div className="qualifying-box">
                                <Image src="/images/servicepage/Service-3.jpg" width={235} height={226} alt="check" />
                                <p>Autism (PA)</p>
                            </div>
                        </Slider>
                    </div>

                </div>
            </section>
        </>
    )
}