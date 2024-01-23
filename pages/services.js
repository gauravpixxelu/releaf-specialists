import ServiceSection from "@/components/servicespage/banner";
import DiagnosisSection from "@/components/servicespage/diagnosis";
import MedicalMarijuana from "@/components/servicespage/medicalmarijuana";
import QualifyingSection from "@/components/servicespage/qualifying";

export default function services() {
    return (
      <>
        <div className="service-main">
         <ServiceSection/>
         <MedicalMarijuana/>
         <DiagnosisSection/>
         <QualifyingSection/> 
        </div>
      </>
    )
}