import Link from "next/link";
import Image from "next/image";

export default function WestVirginiaMedicalLast() {
    return (
        <>
            <section className="last-virginia-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="west-beat-virginia">
                                <Image src="/images/location/map-wv.png" width={550} height={400} alt="check" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="content-good-west">
                                <h3>Items Needed for Medical Marijuana Certification in WV</h3>
                                <p><strong>Medical records dated within the past 12 months confirming the condition/diagnosis applicable for WV</strong></p>
                            </div>
                            <div className="listing-location patient-listing">
                                <ul>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        If no records are available, you may opt to complete our PTSD Assessment for an additional fee for the diagnosis
                                    </li>
                                    <li className="list-link-web">
                                        https://releafspecialists.com/anxietyassessment/
                                    </li>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        If Recertification, provide a copy of your existing MMJ Certificate issued by the previous MMJ Physician
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="inner-provide patient-listing">
                                <p><strong>Proof of WV residency</strong></p>
                                <ul>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        Photo ID
                                    </li>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        Additional residency document as defined by the DHHR
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="inner-provide patient-listing">
                                <p><strong>Physician Fee (Cash or Credit Card)</strong></p>
                                <ul>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        $100 for Recertification Appointment
                                    </li>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        $150 for Initial Appointment (*$50 additional for diagnosis service, if applicable)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="inner-provide patient-listing">
                                <p><strong>DHHR Fee (Check or Money Order)</strong></p>
                                <ul>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        Certification Event Disclaimer:
                                    </li>
                                    <li>
                                        <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                        Terms and conditions apply based on appointment guidelines established by the State and Physician.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="butt-double">
                            <Link href="#" className="green-btn site-btn">Learn More</Link>
                            <Link href="#" className="yellow-btn site-btn">Do I Qualify</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}