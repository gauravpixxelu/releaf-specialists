import Link from "next/link";
export default function ContactBannerSection() {
    return (
        <>
            <div className="contact-banner inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div class="service heading-inner-sec">
                            <h1><span>Contact Us</span>
                            </h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}