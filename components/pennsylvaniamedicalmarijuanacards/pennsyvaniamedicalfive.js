import Link from "next/link";
import Image from "next/image";

export default function PennsyFiveSection() {
    return (
        <>
            <section className="ohio-loction-five">
                <div className="container">
                    <div className="row pennsylv">
                        <div className="col-md-6">
                            <div className="location-img-map">
                                <Image src="/images/location/loction.png" width={550} height={400} alt="check" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="location-content-map">
                                <h3><span className="light-green-txt">Pennsylvania </span> Medical Marijuana Program</h3>
                                <p>On April 17, 2016, the Pennsylvania General Assembly passed the Medical Marijuana Act (Act). The Pennsylvania Department of Health (PA-DOH) oversees the Medical Marijuana Program. This program legalized the sale, possession, and use of medical marijuana. To obtain a medical marijuana card and obtain medical marijuana from a dispensary, you must be a Pennsylvania resident with a valid PA Driver’s License (DL) or PA State Identification (ID). A PA-DOH-approved doctor from Releaf Specialists must verify your medical condition to acquire a certification allowing you to get your medical marijuana card. If you don’t have a qualifying condition, ask one of our representatives about an assessment to help qualify for your PA Medical Marijuana Card.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}