import Image from "next/image";
import Link from "next/link";
export default function MedicalRecords() {
    return (
        <>
        <div className="condition-section-full records-media">
            <div className="container">
                <h2>Release of Medical Records Form (ROMR)</h2>
                <p>Should you need to request your medical records from your treating physician, please feel free to use the Releaf Specialists’ Release of Medical Records (ROMR) Form. We do recommend that you first confirm with your physician’s office that they do not require THEIR own specific ROMR to be submitted to provide or issue you your medical records. In addition, Releaf Specialists is in need of your most recent office consult confirming your condition/diagnosis listed in an active status. We DO NOT typically require your entire medical history or chart.</p>
                <div className="butt-doctor-service condition-req">
                        <Link href="#" className="green-btn site-btn">Download Form</Link>
                    </div>
            </div>
        </div>

        </>
    )
}