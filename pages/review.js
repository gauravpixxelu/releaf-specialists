import ReviewBannerSection from "@/components/ReviewPage/reviewbanner";
import ReviewSecoundSection from "@/components/ReviewPage/reviewsecound";
import ReviewFacbookSection from "@/components/ReviewPage/reviewtwo";


export default function ReviewSection() {
    return (
        <>
            <div className="review-section">
                <ReviewBannerSection />
                <ReviewSecoundSection/>
                <ReviewFacbookSection/>
            </div>
        </>
    )
}