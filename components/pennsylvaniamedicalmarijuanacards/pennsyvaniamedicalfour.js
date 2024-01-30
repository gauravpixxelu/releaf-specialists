import Link from "next/link";
import Image from "next/image";

export default function PennsyvaniaMedicalFour() {
    return (
        <>
            <section className="ohio-loction-four">
                <div className="container">
                    <div className="cearte-ohio-heading">
                        <h2>Why <span class="light-green-txt">Releaf Specialists</span> for your PA Medical Marijuana Card?</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-1.png" width={80} height={80} alt="check" />
                                <p>Releaf Specialists offers telephone appointments for all residents of Pennsylvania looking to obtain their PA Medical Marijuana Card.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-2.png" width={80} height={80} alt="check" />
                                <p>We offer a 1-year certification for all patients at your initial MMJ appointment.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-3.png" width={80} height={80} alt="check" />
                                <p>The cost associated with our initial certification appointment is $150.00, along with your $50.00* state enrollment fee. (*paid directly to the PA DOH MMP)</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-4.png" width={80} height={80} alt="check" />
                                <p>Releaf Specialists offers a FULL 100% money-back guarantee if we can not help you obtain your PA Medical Marijuana Card.</p>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-5.png" width={80} height={80} alt="check" />
                                <p>We offer a FREE medical record review to see if you are eligible to be considered as an MMJ patient.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-6.png" width={80} height={80} alt="check" />
                                <p>Our goal is to help you get certified for your PA Medical Marijuana Card.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box-ohio-four">
                                <Image src="/images/location/pool-7.png" width={80} height={80} alt="check" />
                                <p>FREE health assessments to help you qualify for your PA Medical Marijuana Card.</p>
                            </div>
                        </div>
                        <div className="col-md-3 information-location">
                            <div className="box-ohio-four colorfull">
                                <p>Contact us today to see how we can help you get certified for your PA Medical Marijuana Card!</p>
                                <Link href="/contact" className="white-btn site-btn">Contact Us</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}