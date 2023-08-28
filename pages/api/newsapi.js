import fetch from "node-fetch";

const FetchData = async (req, res) => {
  try {
    // Fetch data from the News API
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();

    // Send the fetched data as the response
    res.status(200).json(data);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export default FetchData;
