import Link from "next/link";
export default function OhioSectionSecound() {
    return (
        <>
            <section className="requirement-renew ohio-three-code">
                <div className="container">
                    <div className="main-renew-coder">
                        <h2><span class="light-green-txt">Medical Marijuana Card</span> Renewal in Ohio</h2>
                        <p>Renewing your registration for your Medical Marijuana Card is easy with Releaf Specialists! We offer renewal services in Ohio.</p>
                        <p>Patients need to renew their medical cards every year. You are not required to visit the same doctor as the first certification. An email will be sent out 60 days before your card expires, letting you know it’s time to renew.</p>
                        <Link href="/schedule" className="green-btn site-btn spacing-section">Schedule an Appointment</Link>
                    </div>
                </div>
            </section>
        </>
    )
}