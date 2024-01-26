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
            <div className="westvirginia-page">
              <WestVirginiBanner/>
              <WestVirginiMarijunaSecound/>
              <OhioMedicalThiredSection/>
              <WestVirginiMarijunaThree/>
              <WestVirginiaMedicalFour/>
              <WestQualifyCommonSection/>
              <WestVirginiaMedicalEven/>
              <WestVirginiaMedicalLast/>
            </div>
        </>
    )
}