import Image from "next/image";
import Link from "next/link";
export default function StillQuestion() {

    return (
        <>
            <section className="still-question-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-still-coder">
                                <Image src="/images/homepage/still.png" width={257} height={327} alt="check" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coder-still-bing">
                                <h4>Still have questions?</h4>
                                <div class="butt-still-question">
                                    <Link href="/contact" className="green-btn site-btn">Contact Us</Link>
                                    <Link href="/schedule" className="green-btn site-btn">Schedule Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}