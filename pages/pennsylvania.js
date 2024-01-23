import RequirementSecound from "@/components/comman/requirementssecound";
import ShopSection from "@/components/comman/shopsection";
import PennsylvaniaBanner from "@/components/pennsylvaniapage/pennsylvaniabanner";
import ReleafSection from "@/components/pennsylvaniapage/releafsection";
import RenewingSecound from "@/components/pennsylvaniapage/renewingsection";


export default function PennsylvaniaSection() {
  return (
    <>
      <div className="Pennsylvania">
        <PennsylvaniaBanner/>
        <RequirementSecound/>
        <RenewingSecound/>
        <ShopSection/>
        <ReleafSection/>
      </div>
    </>
  )
}
