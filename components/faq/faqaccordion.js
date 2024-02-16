import Image from "next/image";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
export default function FaqPopularQuestion() {

    return (
        <>
            <section className="popularquestion-section faq-page-design">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <div class="accordion-design">
                                <h2>Popular Question about <span class="light-green-txt">Releaf Specialists</span></h2>
                            </div> */}
                            <Accordion defaultActiveKey="Non" className="accordion-coder-able">
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
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Can I be a patient and a caregiver?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. You will need to apply for both the Adult Patient and Caregiver status. You must comply with any/all requirements set forth in the application. Having both statuses does require you to have 2-cards; one for the patient and one for the caregiver. You will also have to pay 2-state fees to have your cards issued.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>Do you accept insurance?</Accordion.Header>
                                    <Accordion.Body>
                                        No. Due to the federal status of marijuana, we are unable to participate with insurance companies at this time. We do, however, accept Health Saving Account cards (HSA) for payment associated with your evaluation.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header>What type of marijuana is available at the dispensary? Do I have to smoke it?</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Flower or Buds</li>
                                            <li> You can vaporize (vape) your flower, or use it to make other products</li>
                                            <li>You CANNOT smoke a bowl, joint, bong, or any other combustible method</li>
                                            <li>Combusting marijuana is illegal in Pennsylvania under the rules of the Medical Marijuana Program</li>
                                            <li>Oral Consumables</li>
                                            <li>Pills or Capsules</li>
                                            <li>Tinctures</li>
                                            <li>A diluted oil dropped under the tongue</li>
                                            <li>A formulated oil spray</li>
                                            <li>Rick Simpson Oil or RSo</li>
                                            <li>A form of extraction using alcohol and heat to remove the alcohol</li>
                                            <li>Distillate</li>
                                            <li>Extracted, highly-refined, type of cannabis oil</li>
                                            <li>Commonly obtained through distillation units</li>
                                            <li>Can also be vaporized</li>
                                            <li>Traditional edibles like gummy bears or brownies are not offered at the dispensary, however, you are able to use distillate or RSO to infuse your own food product.</li>
                                            <li>Vaporizer Cartridge (Vape Pen) and Pods</li>
                                            <li>Large variety of vaporizer cartridges are available</li>
                                            <li>Most come in a universal cartridge referred to as a 510 battery</li>
                                            <li>Refers to the thread count on the cartridges</li>
                                            <li>Pods and Disposable Pens are discrete and patient-friendly</li>
                                            <li>Live Resin and Shatter</li>
                                            <li>Form of concentrate using fresh frozen flower or trimmed from cured smokable flower</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <Accordion.Header>Can you grow your own marijuana at home?</Accordion.Header>
                                    <Accordion.Body>
                                        No. Under current regulations, home growing is not permissible.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="10">
                                    <Accordion.Header>Is medical marijuana the same as street stuff?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes and no. The difference is the regulations in the medical marijuana program are more stringent and demand producers to meet high expectations and testing. This allows for a safe product to be distributed to a patient from a trusted source.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="11">
                                    <Accordion.Header>Can I get a medical marijuana card if I own firearms?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, you can be a PA medical marijuana cardholder and still own your firearms. No PA patient will be forced by the police to surrender firearms. For questions or more information, please refer to Cannabis Legal Solutions, the legal experts in cannabis.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="12">
                                    <Accordion.Header>How much does it cost to get an MMJ card in Pennsylvania?</Accordion.Header>
                                    <Accordion.Body>
                                        The cost to purchase a medical marijuana ID card in Pennsylvania is $50. Patients who participate in assistance programs, including Medicaid, PACE/PACENET, CHIP, SNAP, and WIC, may be eligible for reduced fees.
                                    </Accordion.Body>
                                </Accordion.Item>


                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}