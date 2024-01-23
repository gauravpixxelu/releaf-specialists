import ContactBannerSection from "@/components/ContactPageSection/contactbanner";
import ContactFormSection from "@/components/ContactPageSection/contactformsection";
import ContactMapSection from "@/components/ContactPageSection/contactmap";
import ContactSecoundSection from "@/components/ContactPageSection/contactreleafsection";

export default function ContactPage() {
  return (
    <>
      <div className="contactpagedesign">
        <ContactBannerSection/>
        <ContactSecoundSection/>
        <ContactFormSection/>
        <ContactMapSection/>
      </div>
    </>
  )
}
