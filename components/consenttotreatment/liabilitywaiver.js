import Image from "next/image"

export default function LiabilityWaiver() {
    return (
        <>
            <div className="patient-section-treatment liability ">
                <div className="container">
                    <div className="patient-listing">
                        <div className="patient-rights-heading">
                            <h3>Liability Waiver</h3>
                            <p>I hereby acknowledge that I have been instructed about the risks associated with utilizing medical marijuana. These include, but are not limited to:</p>
                        </div>
                        <ul>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                I understand that the physician is providing me with a certificate/prescription to medicate with medical marijuana per the guidelines of the Pennsylvania Department of Health’s Medical Marijuana Program (PA DOH MMP), and understand that the PA DOH MMP is the governing agency for the medical program in which I will adhere to their guidelines for participation. (PA DOH MMP Website – https://www.pa.gov/guides/pennsylvania-medical-marijuana-program/) – PA RESIDENT
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                I understand that the physician is providing me with a certificate/prescription to medicate with medical marijuana per the guidelines of the Ohio Medical Marijuana Control Program (OH MMJ CP), and understand that the OH MMJ CP is the governing agency for the medical program in which I will adhere to their guidelines for participation. (OH MMJ CP Website – www.MedicalMarijuana.Ohio.gov) – OH RESIDENT
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                I understand that the physician is providing me with a certificate/prescription to medicate with medical marijuana per the guidelines of the West Virginia Office of Medical Cannabis Program (MEDCAN WV), and understand that the MEDCAN WV is the governing agency for the medical program in which I will adhere to their guidelines for participation. (MEDCAN WV Website – https://dhhr.wv.gov/bph/Pages/Medical-Cannabis-Program.aspx) – WV RESIDENT
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                I will consult with a legal professional regarding questions or concerns regarding firearms and medical marijuana use.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                I understand that operating a vehicle, machinery, or other motorized vehicle can be hazardous to myself and others while using medical marijuana. I understand that if I am operating a vehicle while utilizing medical marijuana, I may be found under the influence according to state and/or federal law.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                I understand that utilizing medical marijuana may provide possible side effects, as with any other medication, and hereby hold harmless Releaf Specialists for any personal actions I pursue while utilizing medical marijuana.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                I understand that although I may possess medical marijuana legally with a medical card, I must still adhere to my employer’s company policy regarding medical marijuana and controlled substances. Each company’s policy is different, and I may be subject to disciplinary actions or termination if using medical marijuana is against said policy. I.e. Federal employees, truck drivers, etc.
                            </li>
                            <li>
                                <Image src="/images/homepage/check-light.svg" width={20} height={20} alt="check" />
                                I understand medical marijuana is legal to possess and use medically in Pennsylvania, Ohio and/or West Virginia, and that crossing state lines with medical marijuana is federally illegal. Medical Marijuana is still considered illegal on federal property within Pennsylvania, Ohio and/or West Virginia. I.e. federal buildings and federal parks or forest.
                            </li>
                        </ul>
                        <p>I hereby certify that I have read and understand all sections within the Consent to Treatment.<br></br> ~ Releaf Specialists</p>
                    </div>
                </div>
            </div>
        </>
    )
}