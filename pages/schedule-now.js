import Link from "next/link"

export default function ScheduleNow() {
    return (
        <>
            <div className="inner-pages-banner">
                <div className="container">
                    <div className="main-coders-heading">
                        <div class="service heading-inner-sec">
                            <h1><span>Schedule Now</span> </h1>
                        </div>
                        <div className="listing-inner-code">
                            <ul>
                                <li><Link href="/" className="focess-butt">Home</Link> Schedule Now</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sheduler">
                <div className="container">
                    <iframe src="https://booking.releaf-specialists.com/v2/?widget-type=iframe&theme=dainty&theme=dainty&timeline=modern&datepicker=top_calendar#book/count/1/" name="myIFrame" width="100%" height="600px" ></iframe>
                </div>
            </div>
        </>
    )
}