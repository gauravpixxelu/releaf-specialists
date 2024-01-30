import Image from "next/image";
import Link from "next/link";
export default function CardStepSection() {
    return (
        <>
            <section className="renewing-secound card-option">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="images-collapes-coder">
                                <Image src="/images/renewals/card-map.png" width={400} height={430} alt="check" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="content-mockup-renewing">
                                <h3>How Do I Renew My Medical Marijuana Card?</h3>
                            </div>
                            <div className="patient-listing certification">
                                <p><strong>Step 1:</strong> Sign in to the Medical Marijuana Patient Registry to renew your registration and make the required payment.</p>
                                <p><strong>Step 2:</strong> Schedule your MMJ recertification physician appointment. Through Releaf Specialists, you have the choice to schedule your appointment with a Live Agent or use our website’s “Schedule Now” feature. Simply select the state, type of appointment, and pick the date/time you would like the MMJ Physician to call. This appointment is usually shorter than your initial visit.</p>
                                <p><strong>Step 3:</strong> A physician will update your certification and send you an email notifying you that your card renewal is complete. Your new card will typically be mailed out within 10 days.</p>
                                <p><strong>Step 4:</strong> When you receive your new card, you will be asked to update your file at the dispensary.</p>
                                <p>If you are a Veteran, please ask about our Veteran Discount. Due to Medical Marijuana still being federally illegal, insurance companies do not cover appointments and/or services associated with it.</p>
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