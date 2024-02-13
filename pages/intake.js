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
                <title>Medical Marijuana Patient Intake Form | Releaf Specialists</title>
                <meta name="description" content="Sign up for a patient intake form and see how cannabis helps patients alleviate cancer, depression, or anxiety. Quick, secure, and hassle-free." />
            </Head>

            <div className="inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div className="service heading-inner-sec">
                            <h1><span>Intake Form</span> </h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link> Intake Form</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sheduler">
                <div className="container">
                    <div className="vsss" data-tf-live="01HEZVR31ERGKG1C3RNTTCRWZC"></div>
                </div>
            </div>
        </>
    );
}