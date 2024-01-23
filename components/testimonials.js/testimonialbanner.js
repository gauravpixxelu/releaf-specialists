import Link from "next/link";
export default function TestimoialsBannerSection() {
    return (
        <>
            <div className="testimoials inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div class="service heading-inner-sec">
                            <h1><span>Releaf Specialists </span>Testimonials</h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link>Releaf Specialists Testimonials</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}