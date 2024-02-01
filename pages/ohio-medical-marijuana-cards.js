import Head from "next/head";
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

            <Head>
                <title>Ohio Medical Marijuana Card | Releaf Specialists</title>
                <meta name="description" content="Get Your OH Medical Marijuana Cards Online with Releaf Specialists. Our easy process will help you get access to medical cannabis in Ohio." />
            </Head>

            <div className="ohio-medical-section">
                <OhioMedicalBannerSection />
                <OhioMedicalLocationSection />
                <OhioMedicalThiredSection />
                <OhioMedicalFourthSection />
                <OhioMedicalFiveCodeSection />
                <ShopSection />
                <QualifyCommonSection />
                <WeCanHelpSection />
            </div>
        </>
    )
}