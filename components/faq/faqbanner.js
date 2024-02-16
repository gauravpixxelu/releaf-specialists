import Link from "next/link";
export default function FaqBannerSection() {
    return (
        <>
            <div className="review inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div class="service heading-inner-sec faq-banner-cap">
                            <h1><span>Questions about getting </span>a medical marijuana card in PA </h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link>Faq</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}