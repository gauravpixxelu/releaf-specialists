import Link from "next/link";
import Image from "next/image";

export default function Service() {

    return (
        <>
            <section className="service-section">
                <div className="container">
                <div className="process-heading">
                        <h2>States We Service</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="service-box">
                                <Image src="/images/homepage/pennsy.svg" width={132} height={90} alt="check" />
                                <h6>Pennsylvania</h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="service-box">
                                <Image src="/images/homepage/west.svg" width={132} height={115} alt="check" />
                                <h6>West Viriginia</h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="service-box">
                                <Image src="/images/homepage/ohio.svg" width={132} height={136} alt="check" />
                                <h6>Ohio</h6>
                            </div>
                        </div>
                    </div>
                    <div class="all-design-button">
                       <Link href="/schedule" className="green-btn site-btn">Schedule Now</Link>
                    </div>
                </div>
            </section>
        </>
    )
}