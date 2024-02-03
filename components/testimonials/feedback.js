import Link from "next/link";
export default function TestimoialsFeedbackSection() {
    return (
        <>
            <div className="feedback-section">
                <div className="container">
                    <div className="main-feedback-heading">
                       <h2><span className="light-green-txt">Give us a</span> Feedback</h2>
                       <p>Releaf Specialists would love your feedback. Please post your review here, or visit our Google business page to submit your testimonial.</p>
                       <p> <Link href="https://g.page/releafspecialists/review?rc" target="_blank">https://g.page/releafspecialists/review?rc</Link></p>
                       <Link href="#click-scroll" className="green-btn site-btn feedback-test">Send a Testimonial</Link>
                    </div>
                </div>
            </div>
        </>
    )
}