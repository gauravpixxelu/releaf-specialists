import Link from "next/link";

export default function DiagnosisSection() {
    return (
        <>
            <section className="diagnosis-section">
                <div className="container">
                    <div className="intakeform-content diagnosis">
                        <h2>Need a Diagnosis for<span className="light-green-txt"> Anxiety or PTSD</span></h2>
                        <p>Releaf Specialists is happy to help any patient obtain a diagnosis to get certified for a Pennsylvania, Ohio or West Virginia Medical Marijuana card. We offer FREE assessments to any patient who thinks they may suffer from Anxiety or Post Traumatic Stress Disorder (PTSD). Take a moment and complete our intake form to see if you qualify today!</p>
                        <Link href="#" className="green-btn site-btn">Learn more</Link>
                    </div>  
                </div>
            </section>
        </>
    )
}