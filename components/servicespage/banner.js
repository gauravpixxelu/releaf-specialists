import Link from "next/link";

export default function ServiceSection() {
    return (
        <>
            <div className="inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div class="service heading-inner-sec">
                            <h1><span>Releaf Specialists</span> Services</h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link>Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}