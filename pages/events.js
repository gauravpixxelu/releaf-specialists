import EventBannerSection from "@/components/eventpage/eventbanner";
import UpcomingEvents from "@/components/eventpage/upcomingevents";


export default function EventSection() {
    return (
      <>
        <div className="event-section">
           <EventBannerSection/>
           <UpcomingEvents/>
        </div>
      </>
    )
}