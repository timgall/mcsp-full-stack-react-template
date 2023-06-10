import React, { useState, useEffect, useContext } from "react";
import BeanData from "./BeanData";
import image1 from "../images/Africa.png";
import image2 from "../images/Asia.png";
import image3 from "../images/Pacific.png";
import image4 from "../images/Latin America.png";
import image5 from "../images/Carribean.png";
import image6 from "../images/globe.jpeg";
import image7 from "../images/addBean.png";
import image8 from "../images/roasting-infographic-small.png";

const App = () => {
  const images = [
    { src: image1, id: "Africa" },
    { src: image2, id: "Asia" },
    { src: image3, id: "Pacific Islands" },
    { src: image4, id: "Latin America" },
    { src: image5, id: "Central America and Caribbean" },
  ];
  const [selectedRegion, setSelectedRegion] = useState("");
  const [showBeanData, setShowBeanData] = useState(false);
  const [showRoastingGraph, setShowRoastingGraph] = useState(false);
  const [showRegions, setShowRegions] = useState(true);

  const handleBeanClick = () => {
    setShowBeanData(false);
    setShowRegions(false);
  };
  const Header = () => {
    const headerImage = image6;
    const handleHeaderClick = () => {
      setShowBeanData(false);
      setShowRegions(true);
    };

    return (
      <div
        className="header"
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
        onClick={handleHeaderClick}
      >
        <h1>Coffee Beans From Around The World</h1>
      </div>
    );
  };
  const handleClick = (id) => {
    if (id === "Africa") {
      setSelectedRegion("Africa");
      console.log("I was Clicked: ", "Africa");
    } else if (id === "Asia") {
      setSelectedRegion("Asia");
      console.log("I was Clicked: ", "Asia");
    } else if (id === "Pacific Islands") {
      setSelectedRegion("Pacific Islands");
      console.log("I was Clicked: ", "Pacific Islands");
    } else if (id === "Latin America") {
      setSelectedRegion("Latin America");
      console.log("I was Clicked: ", "Latin America");
    } else if (id === "Central America and Caribbean") {
      setSelectedRegion("Central America and Caribbean");
      console.log("I was Clicked: ", "Central America and Caribbean");
    }
    setShowBeanData(true);
  };

  return (
    <div id="app">
      <Header />
      {showRegions && (
        <div className="image-container">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt="Coffee"
              onClick={() => handleClick(image.id)}
            />
          ))}
        </div>
      )}
      {showBeanData && <BeanData region={selectedRegion} />}
      <div className="container">
        <img
          src={image7}
          alt="Add Bean Data"
          onClick={() => handleBeanClick()}
        />
      </div>
    </div>
  );
};

export default App;
