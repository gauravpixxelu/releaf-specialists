import Link from "next/link";
export default function RequirementsSection() {
    return (
        <>
            <div className="inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div class="heading-inner-sec">
                            <h1><span>Requirements</span></h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link>Requirements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}