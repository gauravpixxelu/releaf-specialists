import Image from "next/image";
import Link from "next/link";

export default function ReviewSecoundSection() {
    return (
        <>
            <div className="review-secound">
                <div className="container">
                    <div className="main-review-content">
                        <h2><span className="light-green-txt">Review</span> Us on Google</h2>
                        <p>If you have a Google account or a Gmail, please log in to your account and leave us a review of your experience at one of our clinics. Word of mouth is powerful, and we appreciate ALL reviews left. Mark the appropriate number of stars for your experience, and if you like, leave a short message about us.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box-review-design">
                                <Image src="/images/review/review-1.png" width={200} height={200} alt="check" />
                                <div className="design-butt-review">
                                    <Link href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x883459879994b42d:0x4802262d148265bc!12e1?source=g.page.m.rc._&laa=merchant-web-dashboard-card" className="green-btn site-btn review-butt" target="_blank">Leave us a Review</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-review-design">
                                <Image src="/images/review/review-2.png" width={200} height={200} alt="check" />
                                <div className="design-butt-review">
                                    <Link href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x88357bff6aff2fed:0x4ca02fe85ab1c1cd!12e1?source=g.page.m.rc._&laa=merchant-web-dashboard-card" className="green-btn site-btn review-butt" target="_blank">Leave us a Review</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-review-design">
                                <Image src="/images/review/review-3.png" width={200} height={200} alt="check" />
                                <div className="design-butt-review">
                                    <Link href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x883417b8034e3d67:0xb4279e67557d4605!12e1?source=g.page.m.rc._&laa=merchant-web-dashboard-card" className="green-btn site-btn review-butt" target="_blank">Leave us a Review</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}