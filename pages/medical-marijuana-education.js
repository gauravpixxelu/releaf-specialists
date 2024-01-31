import Head from "next/head";
import HealthcareSection from "@/components/medicalmarijuanaeducation/healthcaresection";
import LotionsVideoSection from "@/components/medicalmarijuanaeducation/lotionsvideosection";
import MedicalMarijuanaSection from "@/components/medicalmarijuanaeducation/medicalmarijuanabanner";
import PatientSection from "@/components/medicalmarijuanaeducation/patientsection";


export default function MedicalMarijuanaEducation() {
  return (
    <>

      <Head>
        <title>Medical Marijuana Education | Releaf Specialists</title>
        <meta name="description" content="Receive expert guidance as you learn about medical marijuana with Releaf Specialists. Empower yourself for a healthier future." />
      </Head>

      <div className="MedicalMarijuanaEducation">
        <MedicalMarijuanaSection />
        <LotionsVideoSection />
        <HealthcareSection />
        <PatientSection />
      </div>
    </>
  )
}