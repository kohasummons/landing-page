const BlogData = require("../utils/blogs.json");
import BlogCard from "./ui/BlogCard";
import styles from "../styles/Blog.module.css"

function Blog() {
  return (
    <div className={styles.blogs}>
      <div className="container">
        <p className="banner">Blog</p>
        <div className={styles.content}>
          {BlogData.map(({ id, image, date, donations, title, article }) => 
            <BlogCard
              key={id}
              image={image}
              date={date}
              donations={donations}
              title={title}
              article={article}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
