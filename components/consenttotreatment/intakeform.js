import Link from "next/link";
export default function IntakeForm() {
    return (
        <>
            <section className="intakeform-section">
                <div className="container">
                    <div className="intakeform-content">
                        <h2>Please complete our Intake Form</h2>
                        <p>The following information must be completed to proceed with an appointment.</p>
                        <Link href="/am-i-eligible" className="green-btn site-btn">Start</Link>
                    </div>
                </div>
            </section>
        </>
    )
}