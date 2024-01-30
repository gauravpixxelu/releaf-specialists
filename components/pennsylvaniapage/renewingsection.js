import Image from "next/image";
import Link from "next/link";
export default function RenewingSecound() {
    return (
        <>
            <section className="renewing-secound">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="images-collapes-coder">
                                <Image src="/images/renewals/PA.png" width={460} height={460} alt="check" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="content-mockup-renewing">
                                <h2>Renewing Your Medical Marijuana Card in Pennsylvania</h2>
                            </div>
                            <div className="patient-listing certification">
                                <ul>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        Sign in to the Medical Marijuana Patient Registry to make a payment or confirm your eligibility if you are requesting waiver of the fee.
                                    </li>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        Schedule an appointment with Releaf Specialists. Visit one of our offices to update your physician certification. This appointment is typically shorter than your first visit. Once the physician has updated your certification, you’ll receive an email letting you know your renewal is complete.
                                    </li>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        Your new card will typically be mailed out within 10 days. When you receive your new card, you will be asked to update your file at the dispensary.
                                    </li>
                                </ul>
                            </div>
                            <div className="triple-butt">
                                <Link href="/schedule" className="green-btn site-btn">Schedule Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}