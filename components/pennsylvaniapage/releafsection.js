import Image from "next/image";
import Link from "next/link";
export default function ReleafSection() {
    return (
        <>
            <section className="releaf-coder-section">
                <div className="container">
                    <div className="releaf-sec-content">
                        <h2>At Releaf Specialists
                            renewing your registration for your Medical Marijuana Card is easy!
                            We offer renewal services in Pennsylvania.</h2>
                        <p>Patients need to renew their medical card every year. You are not required to visit the same doctor as the first certification. An email will be sent out 60 days before your card expires, letting you know it’s time to renew.</p>
                    </div>
                    <div className="secound-releaf-coff">
                        <p><strong>How much does it cost to renew your medical marijuana card in Pennsylvania?</strong></p>
                        <p>The fee for a recertification in PA is $100, pending no additional services are requested. Renewals require an image of current/previous Physician MMJ Certificate.</p>
                    </div>
                    <div className="images-pay-refeal">
                        <Image src="/images/renewals/payment.png" width={890} height={270} alt="check" />
                    </div>
                    <div className="releaf-sec-content pro-effect">
                        <h2>Making a Payment</h2>
                        <p>30 days before payment is due, you’ll receive an email asking you to make the annual payment fee. This is done once every 12 months and you can pay before or after your patient certification with your doctor. Just be sure to pay it before your card expires to avoid any lapses.</p>
                        <p>Log into your MMJ Patient Registry or click the link provided in the email from the state. On the top of the page, click “Make a Payment” and follow the prompts until your payment is complete. You will receive an email once your payment is received.</p>
                    </div>
                </div>
            </section>
        </>
    )
}