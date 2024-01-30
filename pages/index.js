import Head from 'next/head';
import HomeBanner from '@/components/homepage/homebanner';
import ShopSection from '@/components/comman/shopsection';
import ProcessSection from '@/components/homepage/processsection';
import WhyUs from '@/components/homepage/whyus';
import Testimonial from '@/components/comman/testimonial';
import Pricing from '@/components/homepage/pricing';
import Service from '@/components/homepage/service';
import PopularQuestion from '@/components/homepage/popularquestion';
import BlogSection from '@/components/homepage/blogsection';
import StillQuestion from '@/components/homepage/questionssection';


export default function Home() {
  return (
    <>
      <Head> 
        <title>Get Your Medical Marijuana Card Online | Releaf Specialists</title>
        <meta name="description" content="Get your medical marijuana card online. Releaf Specialists is the premier doctor clinic to get a cheap marijuana card in PA, OH, and WV." />
      </Head>

      <div className="homepage">
        <HomeBanner />
        <ProcessSection />
        <WhyUs />
        <Testimonial />
        <Pricing />
        <Service />
        <ShopSection />
        <PopularQuestion />
        <BlogSection />
        <StillQuestion />
      </div>
    </>

  )
}
