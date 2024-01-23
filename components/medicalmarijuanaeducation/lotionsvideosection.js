import Image from "next/image";
export default function LotionsVideoSection() {
    return (
        <>
            <section className="Lotions-video-section">
                <div className="container">
                    <h2>Lotions/Creams/Salves</h2>
                    <div className="video-lotions-code">
                        <Image src="/images/education/video.jpg" width={1326} height={700} alt="check" />
                    </div>
                </div>
            </section>
        </>
    )
}