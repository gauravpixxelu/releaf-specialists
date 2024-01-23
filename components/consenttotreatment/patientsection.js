import Image from "next/image"

export default function PatientSection() {
    return (
        <>
            <div className="patient-section-treatment">
                <div className="container">
                    <div className="patient-listing">
                        <div className="patient-rights-heading">
                            <h3>Patient Rights</h3>
                        </div>
                        <ul>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Each patient will be treated with respect and dignity. Our staff will provide a courteous and professional atmosphere without discriminations to race, religion, ethnicity, disability, or sexual orientation.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Each patient will participate in the decision-making process regarding your healthcare treatment and verification process.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Each patient will be provided with a safe environment.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Each patient will have appropriate suitable privacy regarding communication and medical records.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Each patient’s medical information is protected by HIPAA.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Each patient will be informed of the name and credentials of the person interacting with them.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Each patient may refuse participation in the verification process through Releaf Specialists at any point of their encounter.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Each patient has the right to voice a grievance and/or suggestion without the fear of restraint or discrimination.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                Prior to obtaining and releasing confidential medical records, the patient must consent and release information as indicated.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}