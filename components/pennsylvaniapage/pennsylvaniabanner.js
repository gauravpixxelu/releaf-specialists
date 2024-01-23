import Link from "next/link";
export default function PennsylvaniaBanner() {
    return (
        <>
            <div className="inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div class="service heading-inner-sec">
                            <h1><span>Pennsylvania</span>
                            </h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link>Pennsylvania</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}