import FaqPopularQuestion from '@/components/faq/faqaccordion';
import FaqBannerSection from '@/components/faq/faqbanner';
import Head from 'next/head';

export default function FAQPage() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Contact us to apply for your medical marijuana card online. Quick and easy process with our dedicated team." />
      </Head>

      <div className="faq-page-code">
        <FaqBannerSection/>
        <FaqPopularQuestion/>
      </div>
    </>
  )
}
