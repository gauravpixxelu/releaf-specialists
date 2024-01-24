import Link from "next/link";
export default function BlogBannerSection() {
    return (
        <>
            <div className="review inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div class="service heading-inner-sec">
                            <h1><span>Blog</span> </h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}