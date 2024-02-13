import Head from "next/head";
import OhioMedicalThiredSection from "@/components/ohiomedicalmarijuanacards/Ohiomedicalthired";
import WestQualifyCommonSection from "@/components/westvirginiamedicalmarijuanacards/qualifysectionwest";
import WestVirginiaMedicalEven from "@/components/westvirginiamedicalmarijuanacards/westvirginamedicalevn";
import WestVirginiBanner from "@/components/westvirginiamedicalmarijuanacards/westvirginiabanner";
import WestVirginiaMedicalFour from "@/components/westvirginiamedicalmarijuanacards/westvirginiamedicalfour";
import WestVirginiaMedicalLast from "@/components/westvirginiamedicalmarijuanacards/westvirginiamedicallast";
import WestVirginiMarijunaSecound from "@/components/westvirginiamedicalmarijuanacards/westvirginiasecoundsection";
import WestVirginiMarijunaThree from "@/components/westvirginiamedicalmarijuanacards/westvirginiathree";

export default function WestVirginiaMarijuana() {
    return (
        <>

            <Head>
                <title>West Virginia Medical Marijuana Card | Releaf Specialists</title>
                <meta name="description" content="Get Your WVMedical Marijuana Cards Online with Releaf Specialists. Our easy process will help you get access to medical cannabis in West Virginia." />
            </Head>

            <div className="westvirginia-page">
                <WestVirginiBanner />
                <WestVirginiMarijunaSecound />
                <OhioMedicalThiredSection />
                <WestVirginiMarijunaThree />
                <WestVirginiaMedicalFour />
                <WestQualifyCommonSection />
                <WestVirginiaMedicalEven />
                <WestVirginiaMedicalLast />
            </div>
        </>
    )
}