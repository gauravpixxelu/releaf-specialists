import Head from "next/head";
import EventBannerSection from "@/components/cardrenewalspage/cardrenewalsbanner";
import RequirementListingSection from "@/components/cardrenewalspage/certification";
import RequirementthreeSection from "@/components/cardrenewalspage/renewalsthreesection";
import RequirementRenewSection from "@/components/cardrenewalspage/renewmedicalsection";
import RequirementSecound from "@/components/comman/requirementssecound";
import ShopSection from "@/components/comman/shopsection";

export default function WestVirginia() {
  return (
    <>

      <Head>
        <title>Medical Marijuana Card Renewal in West Virginia | Releaf Specialists</title>
        <meta name="description" content="Get your West Virginia Medical Marijuana Card renewal online. Renewing your registration for your Medical Marijuana Card is easy with Releaf Specialists!" />
      </Head>

      <div className="event-section">
        <EventBannerSection />
        <RequirementSecound />
        <RequirementRenewSection />
        <RequirementthreeSection />
        <ShopSection />
        <RequirementListingSection />
      </div>
    </>
  )
}