import Banner from '@/components/consenttotreatment/banner';
import IntakeForm from '@/components/consenttotreatment/intakeform';
import LiabilityWaiver from '@/components/consenttotreatment/liabilitywaiver';
import PatientResponsibilities from '@/components/consenttotreatment/patientresponsibilities';
import PatientSection from '@/components/consenttotreatment/patientsection';

export default function ConsentTreatment() {
    return (
      <>
        <div className="consenttreatment">
         <Banner/>
         <PatientSection/>
         <PatientResponsibilities/>
         <LiabilityWaiver/>
         <IntakeForm/>
        </div>
      </>
  
    )
  }