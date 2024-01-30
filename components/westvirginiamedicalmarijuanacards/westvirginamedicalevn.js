import Link from "next/link";
import Image from "next/image";

export default function WestVirginiaMedicalEven() {
    return (
        <>
            <section className="ohio-loction-four location-Qrty">
                <div className="container">
                    <div className="cearte-ohio-heading">
                        <h2> What types of  <span class="light-green-txt">Medical Marijuana Products</span> are available in West Virginia?</h2>
                        <p>What forms of medical cannabis are approved for use in WV?</p>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="box-ohio-four">
                                <Image src="/images/location/ping-1.png" width={80} height={80} alt="check" />
                                <p>Pill</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="box-ohio-four">
                                <Image src="/images/location/ping-2.png" width={80} height={80} alt="check" />
                                <p>Oil</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="box-ohio-four">
                                <Image src="/images/location/ping-3.png" width={80} height={80} alt="check" />
                                <p>Topical forms</p>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="box-ohio-four">
                                <Image src="/images/location/ping-4.png" width={80} height={80} alt="check" />
                                <p>Tincture</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="box-ohio-four">
                                <Image src="/images/location/ping-5.png" width={80} height={80} alt="check" />
                                <p>Liquid</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="box-ohio-four">
                                <Image src="/images/location/ping-6.png" width={80} height={80} alt="check" />
                                <p> Dermal Patch</p>
                            </div>
                        </div>
                    </div>
                    <div className="massage-inform">
                        <p>A form medically appropriate for administration by vaporization or nebulization, excluding dry leaf or plant form unless dry leaf or plants forms become acceptable under rules adopted by the Bureau for Public Health</p>
                        <Link href="/schedule" className="green-btn site-btn">Schedule Now</Link>
                    </div>
                </div>
            </section>
        </>
    )
}