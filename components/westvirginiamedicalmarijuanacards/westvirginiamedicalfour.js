import Link from "next/link";
import Image from "next/image";

export default function WestVirginiaMedicalFour() {
    return (
        <>
            <section className="ohio-loction-four">
                <div className="container">
                    <div className="cearte-ohio-heading">
                        <h2>Why <span class="light-green-txt">Releaf Specialists</span> for your PA Medical Marijuana Card?</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-1.png" width={80} height={80} alt="check" />
                                <p>Releaf Specialists offers telephone appointments for all West Virginia residents looking to obtain their West Virginia Medical Marijuana Card.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-2.png" width={80} height={80} alt="check" />
                                <p>We offer 1-year certifications for all patients at your initial MMJ appointment.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-3.png" width={80} height={80} alt="check" />
                                <p>The cost of our Initial MMJ appointment is $150, along with your $50 state fee.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-5.png" width={80} height={80} alt="check" />
                                <p>We offer Free Medical Record reviews to see if you are eligible for your West Virginia Medical Marijuana Card.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-7.png" width={80} height={80} alt="check" />
                                <p>Free Mental Health Assessments for PTSD to help you qualify for your Medical Marijuana Card.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-4.png" width={80} height={80} alt="check" />
                                <p>Releaf Specialists offers a FULL 100% money-back guarantee if we cannot help you obtain your West Virginia Medical Marijuana Card.</p>
                            </div>
                        </div>
                        <div className="good-goal-design">
                            <div className="combine-coder">
                                <p>Our goal is to help you get certified for your medical marijuana card.</p>
                                <p>Contact us today to see how we can help you! 304-212-3472</p>
                            </div>
                            <Link href="/schedule" className="white-btn site-btn">Schedule an Appointment</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}