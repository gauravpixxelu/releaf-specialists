import Link from "next/link";
import Image from "next/image";
export default function WestVirginiMarijunaSecound() {
    return (
        <>
            <section className="requirement-secound">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="requirement-box">
                                <div className="requirement-double-box">
                                  <Image src="/images/requirements/Requirements-1.jpg" width={280} height={280} alt="check" />
                                </div>
                                <div className="requirement-content">
                                    <h4>WV Medical Marijuana Cards</h4>
                                    <p>Legal Access Made Easy in Pennsylvania, Ohio, & West Virginia</p>
                                    <Link href="/schedule" className="green-btn site-btn">Schedule Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="requirement-box">
                                <div className="requirement-double-box">
                                  <Image src="/images/requirements/Requirements-2.jpg" width={280} height={280} alt="check" />
                                </div>
                                <div className="requirement-content">
                                    <h4>Do I Qualify</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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