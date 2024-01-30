import Link from "next/link";
import Image from "next/image";

export default function PatientSection() {
    return (
        <>
            <div className="healthcare-section patient">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-7">
                            <div className="healthcare-section-txt">
                                <h2>Patient Education</h2>
                                <h6>What areas of Pittsburgh, PA do you serve?</h6>
                                <p>We have clinics in Mount Washington, Robinson, Greensburg, Monroeville, North Hills, Washington, and Uniontown. Contact us about scheduling an appointment.</p>
                                <Link href="/contact" className="site-btn green-btn">Learn more</Link>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="healthcare-section-img">
                                <Image src="/images/education/patietns.png" width={500} height={350} alt="check" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}