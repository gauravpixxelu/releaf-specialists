import Link from "next/link";
import { APIurl } from "@/components/APIurl";

export default function BlogDetail({ blog }) {
  

  return (
    <>

      <div className="blog-detail inner-pages-banner">
        <div className="container">
          <div className="main-coders-heading">
            <div class="service heading-inner-sec">
              <h1>{blog.title} </h1>
            </div>
            <div className="listing-inner-code">
              <ul>
                <li><Link href="/" className="focess-butt">Home</Link><Link href="/blog" className="focess-butt">Blog</Link> {blog.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="blog-detail-sec">
        <div className="container">
              <div className="blog-detail-box">
                <img src={blog.image} alt={blog.title} />
                <div dangerouslySetInnerHTML={{ __html: blog.description }} />
              </div>
            </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {
    const response = await fetch(`${APIurl}blog-detail/?slug=${slug}`);
    const data = await response.json();

    if (data.data.length > 0) {
      return {
        props: {
          blog: data.data[0],
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error('Error fetching blog detail:', error);
    return {
      notFound: true,
    };
  }
}
