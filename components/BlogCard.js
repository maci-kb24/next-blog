// import "./blogpost.css";
// import Image from "next/image";

const BlogCard = ({ title, description, url, urlToImage }) => {
  return (
    <div className="blog-card">
      <div className="border-solid  p-5 mb-5 border border-black">
        {/* <img className="blogs-img" src={urlToImage} alt={urlToImage} /> */}
        {/* <Image
          className="blogs-img"
          src={urlToImage}
          alt={urlToImage}
          width={500}
          height={300}
          layout="responsive"
        /> */}
        <h1 className="text-3xl text-bold">{title}</h1>
        <p className="pt-2">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
