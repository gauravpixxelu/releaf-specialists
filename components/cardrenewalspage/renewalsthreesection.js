import Image from "next/image";
import Link from "next/link";
export default function RequirementthreeSection() {
    return (
        <>
            <section className="requirement-three-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="images-requirment-doc">
                                <Image src="/images/renewals/step.png" width={575} height={575} alt="check" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="main-heading-certifiy">
                                <h3>What Are The Steps to Renew My Medical Marijuana Card</h3>
                                <p><strong>Schedule your MMJ Recertification Physician Appointment</strong></p>
                                <p>You will have the opportunity to schedule with the assistance of Live Agent or via our website using the “Schedule Now” feature. Simply select the state, type of appointment, and pick the date/time you would like the MMJ Physician to call. Finalize the appointment by reviewing the terms and conditions and issuing payment.</p>
                                <p>If you are a Veteran, please ask about our Veteran Discount. Due to Medical Marijuana still being federally illegal, insurance companies do not cover appointments and/or services associated with it.</p>
                                <div className="triple-butt">
                                    <Link href="/faq" className="border-btn site-btn"> Ask a Question</Link>
                                    <Link href="/schedule" className="green-btn site-btn">Schedule Now</Link>
                                    <Link href="/am-i-eligible" className="yellow-btn site-btn">Do I Qualify?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}