import HealthcareSection from "@/components/medicalmarijuanaeducation/healthcaresection";
import LotionsVideoSection from "@/components/medicalmarijuanaeducation/lotionsvideosection";
import MedicalMarijuanaSection from "@/components/medicalmarijuanaeducation/medicalmarijuanabanner";
import PatientSection from "@/components/medicalmarijuanaeducation/patientsection";


export default function MedicalMarijuanaEducation() {
    return (
      <>
        <div className="MedicalMarijuanaEducation">
            <MedicalMarijuanaSection/>
            <LotionsVideoSection/>
            <HealthcareSection/>
            <PatientSection/>
        </div>
      </>
    )
}