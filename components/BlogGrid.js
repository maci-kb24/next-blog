import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function BlogGrid() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/newsapi")
      .then((response) => response.json())
      .then((data) => {
        // setArticles(data.posts.slice(0, 10));
        setRecentArticles(data.posts.slice(0, 10));
        console.log(data.posts);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <div className="blog-grid flex flex-col mx-auto">
      {articles.map((article, id) => {
        return (
          <BlogCard
            key={id}
            title={article.title}
            description={article.body}
            // url={article.url}
            // urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
}

export default BlogGrid;
