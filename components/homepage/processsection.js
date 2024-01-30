import Link from "next/link";
import Image from "next/image";

export default function ProcessSection() {
    return (
        <>
            <section className="process-design">
                <div className="container">
                    <h2 className="big-heading white-big">Process</h2>
                    <div className="process-heading">
                        <h2>How to Get a Medical Marijuana Card in <span class="light-green-txt">3 Easy Steps</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box-step">
                                <Image src="../images/homepage/Schedule.svg" width={80} height={80} alt="check" />
                                <h6>Schedule your Appointment</h6>
                                <p>Schedule an appointment that meets the needs of your busy calendar using our (SCHEDULE NOW) feature.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-step">
                                <Image src="../images/homepage/Complete.svg" width={80} height={80} alt="check" />
                                <h6>Complete Our Intake Form</h6>
                                <p>Once you schedule your appointment, you need to complete your intake form prior to speaking with the physician.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-step">
                                <Image src="../images/homepage/wait-call.svg" width={80} height={80} alt="check" />
                                <h6>Wait for Contact</h6>
                                <p>Await contact from the MMJ Physician who initiates the telephone call to you. (NO VIDEO REQUIRED)</p>
                            </div>
                        </div>
                    </div>
                    <div className="all-design-button">
                        <Link href="/schedule" className="green-btn site-btn">Schedule Now</Link>
                    </div>
                </div>
            </section>
        </>
    )
}