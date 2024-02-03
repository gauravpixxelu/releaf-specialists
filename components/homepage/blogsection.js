import Image from "next/image"
import Link from "next/link";
export default function BlogSection() {

    return (
        <div className="blog-section">
            <div className="container">
                <h2 class="big-heading gray-big">Blogs</h2>
                <div className="blog-heading">
                    <h2>Medical Cannabis Resources & News</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="blog-box-design">
                            <Image src="/images/homepage/blog-1.jpg" width={410} height={230} alt="check" />
                            <h6>Top Tips for Choosing the Right Medical Marijuana Card Provider</h6>
                            <p>Accessing quality care begins with choosing the right providers for medical marijuana—a decision that holds the key to getting your medical Marijuana card.</p>
                            <Link href="/blogs/top-tips-for-choosing-the-right-medical-marijuana-card-provider" className="focess-butt">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="blog-box-design">
                            <Image src="/images/homepage/blog-2.jpg" width={410} height={230} alt="check" />
                            <h6>Renewing Your Medical Marijuana Card in Pennsylvania</h6>
                            <p>Patients need to renew their medical card every year. You are not required to visit the same doctor as the first certification. An email will be sent out 60 days before your card expires, letting you know it is time to renew.</p>
                            <Link href="/blogs/renewing-your-medical-marijuana-card-in-pennsylvania" className="focess-butt">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="blog-box-design">
                            <Image src="/images/homepage/blog-3.jpg" width={410} height={230} alt="check" />
                            <h6>Veteran and Disability Discounts Available to Ohio Patients</h6>
                            <p>Ohio Patients can receive a 50% discount on the annual $50 certification fee if they qualify under veteran or disability status.</p>
                            <Link href="/blogs/veteran-and-disability-discounts-available-to-ohio-patients" className="focess-butt">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}