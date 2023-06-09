import React, { useEffect, useState } from "react";
const Region = () => {
  const [RegionCountry, setRegionCountry] = useState({}); // State to store the fetched data

  useEffect(() => {
    fetch("/api/RegionCountry")
      .then((res) => res.json())
      .then((data) => {
        setRegionCountry(data); // Update the state with the fetched data
      });
  }, []);

  return (
    <div>
      <h2>Region and Country:</h2>
      <p>Region: {RegionCountry.region}</p>
      <p>Country: {RegionCountry.country}</p>
    </div>
  );
};

export default Region;
