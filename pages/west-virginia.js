import EventBannerSection from "@/components/cardrenewalspage/cardrenewalsbanner";
import RequirementListingSection from "@/components/cardrenewalspage/certification";
import RequirementthreeSection from "@/components/cardrenewalspage/renewalsthreesection";
import RequirementRenewSection from "@/components/cardrenewalspage/renewmedicalsection";
import RequirementSecound from "@/components/comman/requirementssecound";
import ShopSection from "@/components/comman/shopsection";

export default function CardRenewalsSection() {
    return (
      <>
        <div className="event-section">
            <EventBannerSection/>
            <RequirementSecound/>
            <RequirementRenewSection/>
            <RequirementthreeSection/>
            <ShopSection/>
            <RequirementListingSection/>
        </div>
      </>
    )
}