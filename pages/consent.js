import Head from "next/head";
import Banner from '@/components/consenttotreatment/banner';
import IntakeForm from '@/components/consenttotreatment/intakeform';
import LiabilityWaiver from '@/components/consenttotreatment/liabilitywaiver';
import PatientResponsibilities from '@/components/consenttotreatment/patientresponsibilities';
import PatientSection from '@/components/consenttotreatment/patientsection';

export default function Consent() {
  return (
    <>

      <Head>
        <title>Consent to Treatment for PA, OH & WV | Releaf Specialists</title>
        <meta name="description" content="Trust the experts at Releaf Specialists for a smooth completion of your Consent to Treatment form in Pennsylvania, Ohio, and West Virginia." />
      </Head>

      <div className="consenttreatment">
        <Banner />
        <PatientSection />
        <PatientResponsibilities />
        <LiabilityWaiver />
        <IntakeForm />
      </div>
    </>

  )
}