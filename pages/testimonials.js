import Head from "next/head";
import Testimonial from "@/components/comman/testimonial";
import TestimoialsFeedbackSection from "@/components/testimonials/feedback";
import TestimoialsSendusSection from "@/components/testimonials/sendussection";
import TestimoialsBannerSection from "@/components/testimonials/testimonialbanner";

export default function Testimonials() {
  return (
    <>

      <Head>
        <title>Releaf Specialists Testimonials: Real Stories of Healing and Hope</title>
        <meta name="description" content="Read some testimonials from past and present patients getting our treatment. Please post your review here." />
      </Head>

      <div className="testimoials-section">
        <TestimoialsBannerSection />
        <TestimoialsFeedbackSection />
        <Testimonial />
        <TestimoialsSendusSection />
      </div>
    </>
  )
}