import Link from "next/link";
import Image from "next/image";

export default function HealthcareSection() {
    return (
        <>
            <div className="healthcare-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="healthcare-section-img">
                                <Image src="/images/education/healthcare.png" width={500} height={350} alt="check" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="healthcare-section-txt">
                                <h2>Healthcare Provider Education</h2>
                                <h6>Interested in learning more about the benefits of Medical Marijuana?</h6>
                                <p>The experts at Releaf Specialists will help you answer your patients’ questions regarding medical Marijuana. Call us today to schedule an in-office Medical Marijuana education session.</p>
                                <Link href="/schedule" className="site-btn green-btn">Schedule an Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}