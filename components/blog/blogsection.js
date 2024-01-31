import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${apiUrl}blog-list`);
        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        console.error('Error fetching blog list:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="blog-all-design">
        <div className="container">
          <div className="row">
            {blogs.map(blog => (
              <div className="col-md-4" key={blog.id}>
                <div className="blog-box-design">
                <Link href={`/blogs/${blog.slug}`}><img src={blog.image} alt={blog.title} /></Link>
                  <h6><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></h6>
                  <div dangerouslySetInnerHTML={{ __html: blog.short_description }} />
                  <Link className="focess-butt" href={`/blogs/${blog.slug}`}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}