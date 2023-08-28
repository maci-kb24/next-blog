import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";

function BlogGrid() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/newsapi")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.posts);
        console.log(data.posts);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <div>
      {articles.map((article, id) => {
        return (
          <BlogPost
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
