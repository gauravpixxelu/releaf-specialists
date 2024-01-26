import Image from "next/image";
import Link from "next/link";

export default function ReviewFacbookSection() {
    return (
        <>
            <div className="review-two-section Fcabook-reviews-desgin">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="facbook-review-two">
                                <Image src="/images/review/map-1.png" width={300} height={156} alt="check" />
                                <div className="content-facbook-review">
                                    <strong>Review Us on Facebook</strong>
                                    <p>If you have a Facebook account, we would greatly appreciate it if you logged into your account and left a message about your experience with us. Mark the number of stars appropriate for the service we have provided, and you’re done!</p>
                                    <Link href="https://www.facebook.com/releafspecialists/reviews/?ref=page_internal" className="green-btn site-btn review-butt" target="_blank">Leave us a Review</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="facbook-review-two">
                                <Image src="/images/review/map-2.png" width={300} height={156} alt="check" />
                                <div className="content-facbook-review">
                                    <strong>Review Us on Yelp</strong>
                                    <p>If you have a Yelp account, please log in and mark the appropriate number of stars for your experience with Releaf Specialists. Thank you!</p>
                                    <Link href="https://www.yelp.com/writeareview/biz/Z4c5HlFuyGEpTf29n-SbfQ?return_url=%2Fbiz%2FZ4c5HlFuyGEpTf29n-SbfQ&review_origin=biz-details-war-button" className="green-btn site-btn review-butt" target="_blank">Leave us a Review</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}