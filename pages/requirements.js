import Head from "next/head";
import ShopSection from "@/components/comman/shopsection";
import CardRequirementSection from "@/components/requirementspage/cardrequirements";
import ConditionsSection from "@/components/requirementspage/conditionssection";
import MedicalRecords from "@/components/requirementspage/medicalrecords";
import RequirementsSection from "@/components/requirementspage/requirementbanner";
import RequirementSecound from "@/components/comman/requirementssecound";

export default function Requirements() {
  return (
    <>

      <Head>
        <title>Medical Marijuana Card Requirements | Releaf Specialists</title>
        <meta name="description" content="Learn about the essential requirements for your medical marijuana card with Releaf Specialists. Expert guidance, simplified." />
      </Head>

      <div className="requirements-main">
        <RequirementsSection />
        <RequirementSecound />
        <CardRequirementSection />
        <ConditionsSection />
        <ShopSection />
        <MedicalRecords />
      </div>
    </>
  )
}