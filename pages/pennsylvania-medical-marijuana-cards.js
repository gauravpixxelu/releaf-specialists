import QualifyCommonSection from "@/components/comman/qualifySection";
import ShopSection from "@/components/comman/shopsection";
import OhioMedicalThiredSection from "@/components/ohiomedicalmarijuanacards/Ohiomedicalthired";
import PennsyHelpSection from "@/components/pennsylvaniamedicalmarijuanacards/pennsyhelpsection";
import PennsylvaniaBannerSection from "@/components/pennsylvaniamedicalmarijuanacards/pennsylvaniamedicalbanner";
import PennsylvaniaMedicalLocationSection from "@/components/pennsylvaniamedicalmarijuanacards/pennsylvaniamedicalsecound";
import PennsyFiveSection from "@/components/pennsylvaniamedicalmarijuanacards/pennsyvaniamedicalfive";
import PennsyvaniaMedicalFour from "@/components/pennsylvaniamedicalmarijuanacards/pennsyvaniamedicalfour";


export default function PennsylvaniaMedicalMarijuana() {
    return (
        <>
            <div className="pennsylvania-medical-section">
                <PennsylvaniaBannerSection/>
                <PennsylvaniaMedicalLocationSection/>
                <OhioMedicalThiredSection/>
                <PennsyvaniaMedicalFour/>
                <PennsyFiveSection/>
                <ShopSection/>
                <QualifyCommonSection/>
                <PennsyHelpSection/>
            </div>
        </>
    )
}