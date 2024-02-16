import Image from "next/image";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
export default function PopularQuestion() {

    return (
        <>
            <section className="popularquestion-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="accordion-design">
                                <h2>Popular Question about <span class="light-green-txt">Releaf Specialists</span></h2>
                            </div>
                            <Accordion defaultActiveKey="Non">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What areas of Pittsburgh do you serve?</Accordion.Header>
                                    <Accordion.Body>
                                        We have offices in <Link href="#">Mount Washington,</Link> <Link href="#">Robinson,</Link> <Link href="#">Greensburg,</Link>  Monroeville, North Hills, Uniontown, and Washington.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Can you help me register with the PA Department of Health?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. Releaf Specialists are able to help the patient register and, if necessary, the Caregiver. In order for Releaf Specialists to be able to assist in registering, the following information is needed:
                                        <ul>
                                            <li>Valid PA Driver’s License or PA State Identification</li>
                                            <li>An active email address</li>
                                            <li>Telephone number</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What type of documentation or records do I need to provide?</Accordion.Header>
                                    <Accordion.Body>
                                        Records must document, or verify, that you have been diagnosed with 1 of the 23 qualifying conditions recognized by the PA Department of Health for Medical Marijuana use. This information can be in the form of, but not limited to:
                                        <ul>
                                            <li>PCP, Therapist, or Chiropractors medical records</li>
                                            <li>Online health portal/chart documentation</li>
                                            <li>An after-visit summary report</li>
                                            <li>Certifications of outpatient treatment.</li>
                                            <li> We encourage you to reach out to one of our friendly staff members to see if what you have will qualify you.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Do I need a referral or letter from my doctor?</Accordion.Header>
                                    <Accordion.Body>
                                        No. The option to share your medical marijuana cardholder information with your treating physicians is based solely on your discretion. As mentioned before, we only need to confirm your condition is active in your medical history as diagnosed by a licensed practitioner.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>How long is my dispensary card or certificate valid?</Accordion.Header>
                                    <Accordion.Body>
                                        The longest period permitted by the PA Department of Health is a 1-year term. Releaf Specialists will certify all patients for 1-year unless a shorter period is requested by the patient.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Is my Pennsylvania Medical Marijuana Card good at any dispensary in the Commonwealth of Pennsylvania?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes! You can use your Pennsylvania Medical Marijuana Card at any dispensary located in the Commonwealth of Pennsylvania.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                        <div className="col-md-6">
                            <Image src="/images/homepage/popular.jpg" width={620} height={560} alt="check" />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}