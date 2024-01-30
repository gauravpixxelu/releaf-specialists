import Head from "next/head";
import EventBannerSection from "@/components/eventpage/eventbanner";
import UpcomingEvents from "@/components/eventpage/upcomingevents";


export default function Event() {
  return (
    <>

      <Head>
        <title>Releaf Specialists Events: Join Us Today!</title>
        <meta name="description" content="Join us today for Releaf Specialists Events. Connect with our community, learn from experts, and enhance your wellness journey." />
      </Head>

      <div className="event-section">
        <EventBannerSection />
        <UpcomingEvents />
      </div>

    </>
  )
}