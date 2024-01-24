import Image from "next/image";
import Link from "next/link";
export default function Pricing() {

    return (
        <>
            <section className="pricing-section">
                <div className="container">
                    <h2 className="big-heading yellow-big">Pricing</h2>
                    <div className="process-heading">
                        <h2>Affordable Pricing Plan</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box-pricing-detai">
                                <div className="left-content-pricing">
                                    <Image src="/images/homepage/madical-card.svg" width={80} height={80} alt="check" />
                                </div>
                                <div className="heading-pricing-main">
                                    <h4>Marijuana Medical Card</h4>
                                </div>
                                <div className="butt-price">
                                    <h4><span>$</span>150</h4>
                                    <Link href="#" className="green-btn site-btn">Get Your Card Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-pricing-detai">
                                <div className="left-content-pricing">
                                    <Image src="/images/homepage/madical-card.svg" width={80} height={80} alt="check" />
                                </div>
                                <div className="heading-pricing-main">
                                    <h4>Renew <br></br>Card</h4>
                                </div>
                                <div className="butt-price">
                                    <h4><span>$</span>100</h4>
                                    <Link href="#" className="green-btn site-btn">Renew Your Card Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}