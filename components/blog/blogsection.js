import { useState, useEffect } from 'react';
import Link from "next/link";

export default function BlogSecoundSection() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('https://pixxeluclients.com/php-dev/releaf-specialists/api/blog-list');
            const data = await response.json();
            setBlogs(data.data);
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
                                    <img src={blog.image} alt={blog.title} />
                                    <h6><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></h6>
                                    <p dangerouslySetInnerHTML={{ __html: blog.short_description }} />
                                    <Link className="focess-butt" href={`/blogs/${blog.slug}`}>Read More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}