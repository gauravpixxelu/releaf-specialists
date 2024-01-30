import Head from "next/head";
import ReviewBannerSection from "@/components/ReviewPage/reviewbanner";
import ReviewSecoundSection from "@/components/ReviewPage/reviewsecound";
import ReviewFacbookSection from "@/components/ReviewPage/reviewtwo";


export default function Review() {
    return (
        <>

            <Head>
                <title>Customer Reviews | Releaf Specialists</title>
                <meta name="description" content="Experience the transformative feedback. Dive into the world of customer reviews at Releaf Specialists and witness the impact." />
            </Head>

            <div className="review-section">
                <ReviewBannerSection />
                <ReviewSecoundSection />
                <ReviewFacbookSection />
            </div>
        </>
    )
}