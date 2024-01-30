
import Link from "next/link";
export default function RequirementRenewSection() {
    return (
        <>
            <section className="requirement-renew">
                <div className="container">
                    <div className="main-renew-coder">
                        <h2><span class="light-green-txt">Renew</span> Medical Marijuana Card in West Virginia</h2>
                        <p>At Releaf Specialists, renewing your registration for your Medical Marijuana Card is easy! We offer renewal services in West Virginia.</p>
                        <p>Patients need to renew their medical cards every year. You are not required to visit the same doctor as the first certification. An email will be sent out 60 days before your card expires, letting you know it’s time to renew.</p>
                        <Link href="/schedule" className="green-btn site-btn spacing-section">Schedule an Appointment</Link>
                    </div>
                </div>
            </section>
        </>
    )
}