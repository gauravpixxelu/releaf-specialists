import Head from "next/head";
import RequirementSecound from "@/components/comman/requirementssecound";
import ShopSection from "@/components/comman/shopsection";
import OhioSectionSecound from "@/components/ohio/Ohiosecoundsection";
import CardStepSection from "@/components/ohio/cardstepsection";
import OhioBanner from "@/components/ohio/ohiobanner";

export default function Ohio() {
  return (
    <>

      <Head>
        <title>Medical Marijuana Card Renewal in Ohio | Releaf Specialists</title>
        <meta name="description" content="Get your Ohio Medical Marijuana Card renewal online. Renewing your registration for your Medical Marijuana Card is easy with Releaf Specialists!" />
      </Head>

      <div className="ohio-section-desgin">
        <OhioBanner />
        <RequirementSecound />
        <OhioSectionSecound />
        <ShopSection />
        <CardStepSection />
      </div>
    </>
  )
}
