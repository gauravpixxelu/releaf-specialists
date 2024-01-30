import Link from "next/link";
import Image from "next/image";

export default function OhioMedicalFiveCodeSection() {
    return (
        <>
            <section className="ohio-loction-five">
                <div className="container">
                    <div className="row pennsylv">
                        <div className="col-md-6">
                            <div className="location-img-map">
                                <Image src="/images/location/map-location.png" width={550} height={400} alt="check" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="location-content-map">
                                <h3><span className="light-green-txt">Ohio </span> Medical Marijuana Program</h3>
                                <p>House Bill 523, effective on September 8, 2016, legalized medical marijuana in Ohio. The Ohio Medical Marijuana Control Program allows patients with certain medical conditions to obtain an Ohio Medical marijuana card and shop at an approved licensed medical marijuana dispensary in Ohio.</p>
                                <div className="butt-ohio">
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