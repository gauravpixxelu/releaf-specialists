import QualifyCommonSection from "@/components/comman/qualifySection";
import ShopSection from "@/components/comman/shopsection";
import OhioMedicalLocationSection from "@/components/ohiomedicalmarijuanacards/ohiomedicalsecoundsection";
import OhioMedicalFourthSection from "@/components/ohiomedicalmarijuanacards/Ohiomedicalfourthsection";
import OhioMedicalThiredSection from "@/components/ohiomedicalmarijuanacards/Ohiomedicalthired";
import OhioMedicalFiveCodeSection from "@/components/ohiomedicalmarijuanacards/ohiomedialfivesection";
import OhioMedicalBannerSection from "@/components/ohiomedicalmarijuanacards/ohiomedicalbannerscction";
import WeCanHelpSection from "@/components/ohiomedicalmarijuanacards/wecanhelp";

export default function OhioMedialSection() {
    return (
        <>
            <div className="ohio-medical-section">
                <OhioMedicalBannerSection/>
                <OhioMedicalLocationSection/>
                <OhioMedicalThiredSection/>
                <OhioMedicalFourthSection/>
                <OhioMedicalFiveCodeSection/>
                <ShopSection/>
                <QualifyCommonSection/>
                <WeCanHelpSection/>
            </div>
        </>
    )
}