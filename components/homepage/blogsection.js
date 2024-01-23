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
                            <h6>What is Terpinolene? Terpinolene Effects, Benefits & Strains</h6>
                            <p>Photo by Olia Danilevich Science is continually discovering a whole new batch of health benefits from the countless compounds found in cannabis.</p>
                            <Link href="#" className="focess-butt">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="blog-box-design">
                            <Image src="/images/homepage/blog-2.jpg" width={410} height={230} alt="check" />
                            <h6>What is Terpinolene? Terpinolene Effects, Benefits & Strains</h6>
                            <p>Photo by Olia Danilevich Science is continually discovering a whole new batch of health benefits from the countless compounds found in cannabis.</p>
                            <Link href="#" className="focess-butt">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="blog-box-design">
                            <Image src="/images/homepage/blog-3.jpg" width={410} height={230} alt="check" />
                            <h6>What is Terpinolene? Terpinolene Effects, Benefits & Strains</h6>
                            <p>Photo by Olia Danilevich Science is continually discovering a whole new batch of health benefits from the countless compounds found in cannabis.</p>
                            <Link href="#" className="focess-butt">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}