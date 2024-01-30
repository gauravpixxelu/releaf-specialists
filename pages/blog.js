import Head from "next/head";
import BlogBannerSection from "@/components/blog/blogbanner";
import BlogSecoundSection from "@/components/blog/blogsection";


export default function Blog() {
    return (
        <>

            <Head>
                <title>Medical Marijuana Blog | Medical Cannabis Program</title>
                <meta name="description" content="Discover the latest developments in medical cannabis news, patient stories, and clinical research with Releaf Specialists. Please read our latest content today!" />
            </Head>

            <div className="blog-page-section">
                <BlogBannerSection />
                <BlogSecoundSection />
            </div>

        </>
    )
}