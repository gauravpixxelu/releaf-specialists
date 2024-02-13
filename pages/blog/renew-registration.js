import Head from "next/head";
import RequirementSecound from "@/components/comman/requirementssecound";
import ShopSection from "@/components/comman/shopsection";
import PennsylvaniaBanner from "@/components/pennsylvaniapage/pennsylvaniabanner";
import ReleafSection from "@/components/pennsylvaniapage/releafsection";
import RenewingSecound from "@/components/pennsylvaniapage/renewingsection";


export default function Pennsylvania() {
  return (
    <>

      <Head>
        <title>Medical Marijuana Card Renewal in Pennsylvania | Releaf Specialists</title>
        <meta name="description" content="Get your Pennsylvania Medical Marijuana Card renewal online. Renewing your registration for your Medical Marijuana Card is easy with Releaf Specialists!" />
      </Head>

      <div className="Pennsylvania">
        <PennsylvaniaBanner />
        <RequirementSecound />
        <RenewingSecound />
        <ShopSection />
        <ReleafSection />
      </div>
    </>
  )
}
