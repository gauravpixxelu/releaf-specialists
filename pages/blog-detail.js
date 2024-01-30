import { useEffect, useState } from 'react';

const BlogDetail = ({ blogSlug }) => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://pixxeluclients.com/php-dev/releaf-specialists/api/blog-detail/?slug=${blogSlug}`);
      const data = await res.json();
      setBlogData(data);
    };

    fetchData();
  }, [blogSlug]);

  return (
    <div>
      {blogData && (
        <div>
          <h1>{blogData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
          {/* render other blog data here */}
        </div>
      )}
      {!blogData && <p>Loading...</p>}
    </div>
  );
};

BlogDetail.getInitialProps = async ({ query }) => {
  return { blogSlug: query.slug };
};



<section className="blog-detail">      
{blogs.map(blog => (
  
  <div className="container">
  <div className="row">
    <div className="col-md-9">
      <div className="blog-detail-cnt">
        <h1>{blogData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
        <div className="blog-txt" dangerouslySetInnerHTML={{ __html: blog.description }} />  
        
      </div>
    </div>
    <div className="col-md-3">
      <div className="sidebar">
        <BlogSidebar />
      </div>   
    </div>   
  </div>  
  </div>     
  
))}      
</section>



export default BlogDetail;