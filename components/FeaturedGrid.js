import { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard";

const Featured = ({ title, description }) => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("/api/newsapi")
      .then((response) => response.json())
      .then((data) => {
        setFeatured(data.posts.slice(0, 3));
        console.log(data.posts);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <div className="featured-grid flex">
      {featured.map((article, id) => {
        return (
          <FeaturedCard
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
};

export default Featured;
