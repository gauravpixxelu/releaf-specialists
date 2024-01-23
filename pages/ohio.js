import RequirementSecound from "@/components/comman/requirementssecound";
import ShopSection from "@/components/comman/shopsection";
import OhioSectionSecound from "@/components/ohio/Ohiosecoundsection";
import CardStepSection from "@/components/ohio/cardstepsection";
import OhioBanner from "@/components/ohio/ohiobanner";

export default function Ohio() {
  return (
    <>
      <div className="ohio-section-desgin">
        <OhioBanner/>
        <RequirementSecound/>
        <OhioSectionSecound/> 
        <ShopSection/>
        <CardStepSection/>
      </div>
    </>
  )
}
