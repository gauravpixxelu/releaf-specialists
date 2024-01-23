import ShopSection from "@/components/comman/shopsection";
import CardRequirementSection from "@/components/requirementspage/cardrequirements";
import ConditionsSection from "@/components/requirementspage/conditionssection";
import MedicalRecords from "@/components/requirementspage/medicalrecords";
import RequirementsSection from "@/components/requirementspage/requirementbanner";
import RequirementSecound from "@/components/comman/requirementssecound";

export default function Requirements() {
    return (
      <>
        <div className="requirements-main">
        <RequirementsSection/>
        <RequirementSecound/>
        <CardRequirementSection/>
        <ConditionsSection/>
        <ShopSection/>
        <MedicalRecords/>
        </div>
      </>
    )
}