import Head from 'next/head';
import ServiceSection from "@/components/servicespage/banner";
import DiagnosisSection from "@/components/servicespage/diagnosis";
import MedicalMarijuana from "@/components/servicespage/medicalmarijuana";
import QualifyingSection from "@/components/servicespage/qualifying";

export default function services() {
  return (
    <>
      <Head>
        <title>Medical Marijuana Card Service | Releaf Specialists</title>
        <meta name="description" content="How to Get a Medical Marijuana Card Service. Get your Medical Marijuana Card Online Service easily with Releaf Specialists. Schedule online." />
      </Head>

      <div className="service-main">
        <ServiceSection />
        <MedicalMarijuana />
        <DiagnosisSection />
        <QualifyingSection />
      </div>
    </>
  )
}