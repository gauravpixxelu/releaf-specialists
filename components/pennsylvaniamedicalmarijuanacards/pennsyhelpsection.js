import Link from "next/link";

export default function PennsyHelpSection() {
    return (
        <>
            <section className="WeCanHelp-six">
                <div className="container">
                    <div className="heading-wecanhelp">
                        <h2>Already Using Marijuana? Self Medicating? We can Help!</h2>
                        <p>Releaf Specialists can help any patient who has not been diagnosed by a Healthcare professional. We recognize some patients may use marijuana and “Self-Medicate.” We offer free assessments to help you obtain a PTSD diagnosis to become eligible for the Ohio Medical Marijuana program.</p>
                    </div>
                    <div className="box-decide-pages-helper">
                        <h3>PA Medical Marijuana Cards</h3>
                        <p>Getting your Medical Marijuana Card in Pennsylvania is easy and affordable. Releaf Specialists offers Online appointments for both New and Recertification appointments for your Pennsylvania Medical Marijuana card. We offer FREE record reviews to see if you are eligible for your Pa MMJ Card. Take a Free Assessment to get qualified today!</p>
                        <div className="butt-ohio help-button">
                            <Link href="/schedule" className="green-btn site-btn">Schedule Now</Link>
                            <Link href="/am-i-eligible" className="yellow-btn site-btn">Do I Qualify?</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}