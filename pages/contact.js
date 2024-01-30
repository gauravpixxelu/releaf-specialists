import Head from 'next/head';
import ContactBannerSection from "@/components/ContactPageSection/contactbanner";
import ContactFormSection from "@/components/ContactPageSection/contactformsection";
import ContactMapSection from "@/components/ContactPageSection/contactmap";
import ContactSecoundSection from "@/components/ContactPageSection/contactreleafsection";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Apply Online for Your MMJ Card</title>
        <meta name="description" content="Contact us to apply for your medical marijuana card online. Quick and easy process with our dedicated team." />
      </Head>

      <div className="contactpagedesign">
        <ContactBannerSection />
        <ContactSecoundSection />
        <ContactFormSection />
        <ContactMapSection />
      </div>
    </>
  )
}
