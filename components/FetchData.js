import React, { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <div>
      <p>Name: {data.name}</p>
    </div>
  );
}

export default FetchData;
