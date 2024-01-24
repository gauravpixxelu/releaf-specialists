import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CardRequirementSection() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <>
            <section className="card-inner inner-qualifying-page testimonial-section">
                <div className="container">
                    <div className="qualifying-heading">
                        <h2>Medical Marijuana Card Requirements For <span class="light-green-txt">Ohio, Pennsylvania & West Virginia</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="service-box">
                                <Image src="/images/homepage/pennsy.svg" width={132} height={90} alt="check" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="service-box">
                                <Image src="/images/homepage/west.svg" width={132} height={115} alt="check" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="service-box">
                                <Image src="/images/homepage/ohio.svg" width={132} height={136} alt="check" />
                            </div>
                        </div>
                    </div>
                    <div className="slider-service">
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