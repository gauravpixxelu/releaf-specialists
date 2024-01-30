import Link from "next/link";
import Image from "next/image";

export default function WeCanHelpSection() {
    return (
        <>
            <section className="WeCanHelp-six">
                <div className="container">
                    <div className="heading-wecanhelp">
                        <h2>Already Using Marijuana? Self Medicating? We can Help!</h2>
                        <p>Releaf Specialists can help any patient who has not been diagnosed by a Healthcare professional. We recognize some patients may use marijuana and “Self-Medicate.” We offer free assessments to help you obtain a PTSD diagnosis to become eligible for the Ohio Medical Marijuana program.</p>
                    </div>
                    <div className="box-decide-pages-helper">
                        <h3>Ohio Medical Marijuana Cards</h3>
                        <p>Getting your Ohio Medical Marijuana Card is simple. Releaf Specialists make the process easy and affordable. We offer FREE record reviews to see if you’re eligible. If you do not have any medical records, we can still help you obtain your Ohio Medical Marijuana Card!!</p>
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