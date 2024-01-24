
import Testimonial from "@/components/comman/testimonial";
import TestimoialsFeedbackSection from "@/components/testimonials.js/feedback";
import TestimoialsSendusSection from "@/components/testimonials.js/sendussection";
import TestimoialsBannerSection from "@/components/testimonials.js/testimonialbanner";

export default function TestimoialsSection() {
    return (
      <>
        <div className="testimoials-section">
           <TestimoialsBannerSection/>
           <TestimoialsFeedbackSection/>
           <Testimonial/>
           <TestimoialsSendusSection/>
        </div>
      </>
    )
}