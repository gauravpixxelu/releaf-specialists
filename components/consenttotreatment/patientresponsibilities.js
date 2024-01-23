import Image from "next/image"

export default function PatientResponsibilities() {
    return (
        <>
            <div className="patient-section-treatment responsibilities">
                <div className="container">
                    <div className="patient-listing">
                        <div className="patient-rights-heading">
                            <h3>Patient Responsibilities</h3>
                        </div>
                        <ul>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Patient must provide accurate and complete medical information regarding his/her health status, prior illnesses, medications, and other matters that are pertinent for the verification process.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Patient should voice their concerns to staff regarding eligibility in the verification process for the use of medicinal marijuana.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Patient must comply with the regulations established through Releaf Specialists and the Commonwealth of Pennsylvania, State of Ohio, and State of West Virginia.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Staff and Patients are mandated to report abuse, neglect, or exploitations to the Pennsylvania, Ohio, or West Virginia Department of Children and Family Grievances.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Patients are to provide and authorize the release of necessary records from appropriate sources.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Patient needs to act in respectful and considerate manner to the staff of Releaf Specialists.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Patient needs to ask questions and seek clarifications in areas of concern.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Patient must fulfill financial obligations at the time services are rendered through Releaf Specialists.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Credit Card transaction will display as RS3, LLC on banking statement. Should a dispute resulting in take back of payment for services rendered, certification will be terminated within 48-hours of notice provided by Releaf Specialists, LLC of said issue.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Patient understand Releaf Specialists may make any changes to the patient’s treatment plan during their validation period, and Releaf Specialists reserves all rights to terminate patient’s treatment. Releaf Specialist is not responsible for any actions or liabilities caused from terminating patient treatment.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}