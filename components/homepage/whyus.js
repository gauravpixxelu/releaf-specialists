import Link from "next/link";
import Image from "next/image";

export default function WhyUs() {

    return (
        <>
            <section className="why-us-section">
                <div className="container">
                    <h2 className="big-heading">Why Us</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="why-us-content">
                                <h2>Do You Suffer From Anxiety or Ptsd but Have No Records?<span class="light-green-txt">Self-medicating and You Want Your Card</span></h2>
                                <p>Releaf Specialists is able to help you obtain a Generalized Anxiety Disorder or PTSD diagnosis in order for you to get qualified for your Medical Marijuana Card. Please take a moment to complete our Intake Form to see if you qualify today!</p>
                                <Link href="#" className="green-btn site-btn">Get Your Card Now</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="whyus-image">
                                <Image src="/images/homepage/medicating.png" width={700} height={686} alt="check" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}