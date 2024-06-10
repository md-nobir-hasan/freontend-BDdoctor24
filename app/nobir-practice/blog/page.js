// app/blog.js (or pages/blog.js depending on your structure)
import { useRouter } from "next/router";
import { useEffect } from "react";

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query; // Destructure the 'slug' from query

  useEffect(() => {
    if (slug) {
      console.log(`Slug: ${slug}`);
    }
  }, [slug]);

  return (
    <div>
      <h1>Blog Page</h1>
      {slug && <p>Slug: {slug}</p>}
    </div>
  );
};

export default Blog;
