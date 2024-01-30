import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function AmIEligible() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>

            <Head>
                <title>Check Eligibility for Medical Cannabis | Releaf Specialists</title>
                <meta name="description" content="Explore eligibility for medical cannabis at Thuga. Our specialists guide you through the process. Discover relief with Releaf Specialists." />
            </Head>

            <div className="inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div className="service heading-inner-sec">
                            <h1><span>Am I Eligible</span> </h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link> Am I Eligible</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sheduler">
                <div className="container">
                    <div data-tf-live="01HFTXN7FXGDQHN6EJDYNJYS8F"></div>
                </div>
            </div>
        </>
    );
}