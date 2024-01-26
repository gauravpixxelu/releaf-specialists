import Link from "next/link";
import { useEffect } from "react";

export default function DoYouQualify() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div className="service heading-inner-sec">
                            <h1><span>Do You Qualify</span> </h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link> Do You Qualify</li>
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