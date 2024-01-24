import BlogBannerSection from "@/components/blog/blogbanner";
import BlogSecoundSection from "@/components/blog/blogsection";


export default function BlogSection() {
    return (
        <>
            <div className="blog-page-section">
               <BlogBannerSection/>
               <BlogSecoundSection/>
            </div>
        </>
    )
}