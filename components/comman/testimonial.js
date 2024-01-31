
import Image from "next/image";
import TestimonialSlider from "./testimonialslider";


export default function Testimonial() {

    return (
        <>
            <section className="testimonial-section">
                <div className="container">
                    <h2 className="big-heading gray-big">Testimonial</h2>
                    <div className="testimonial-full-page">
                        <Image src="/images/homepage/star.png" width={154} height={24} alt="check" />
                    </div>
                    <div className="process-heading">
                        <h2>Trusted & Loved by more than <span class="light-green-txt">10,000+</span> Medical Marijuana Users</h2>
                    </div>
                    <TestimonialSlider />
                </div>
            </section>

        </>
    )
}