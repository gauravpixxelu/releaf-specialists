import Link from "next/link";
export default function ReviewBannerSection() {
    return (
        <>
            <div className="review inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div class="service heading-inner-sec">
                            <h1><span>Review</span> Releaf Specialists</h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link>Review Releaf Specialists</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}