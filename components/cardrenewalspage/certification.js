import Link from "next/link";
import Image from "next/image";
export default function RequirementListingSection() {
    return (
        <>
            <section className="requirement-certification">
                <div className="container">
                    <div className="main-certification-coder">
                        <h2>Requirements & Process to Renew Your Certification in WV</h2>
                    </div>
                    <div className="patient-listing certification">
                        <ul>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Sign in to the Medical Marijuana Patient Registry to renew your registration and make a payment.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Schedule an appointment with Releaf Specialists. Visit one of our offices to update your physician certification.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                This appointment is typically shorter than your first visit.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Once the physician has updated your certification, you receive an email letting you know your renewal is complete. Your new card will typically be mailed out within 10 days.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                When you receive your new card, you will be asked to update your file at the dispensary.
                            </li>
                        </ul>
                        <Link href="/schedule" className="green-btn site-btn">Schedule Now</Link>
                        <div className="certification-box">
                            <p>For WV Residents: The WV Office of Medical Cannabis issues you an email to begin the recertification process. You are required to renew your medical card via this email. If you have changed your residency, you must notify Releaf Specialists.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}