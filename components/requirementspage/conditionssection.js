import Image from "next/image";
import Link from "next/link";
export default function ConditionsSection() {
    return (
        <>
        <div className="condition-section-full">
            <div className="container">
                <h2>Qualifying Conditions in Pennsylvania, <span class="light-green-txt">Ohio and WV for a Medical Marijuana Card</span></h2>
                <p>Patients suffering from at least one of the mentioned medical conditions may participate in the PA, OH, and WV Medical Marijuana Program.</p>
                <div className="butt-doctor-service condition-req">
                        <Link href="#" className="green-btn site-btn">Get Certified</Link>
                        <Link href="/am-i-eligible" className="yellow-btn site-btn">Do I Qualify?</Link>
                    </div>
            </div>
        </div>

        </>
    )
}