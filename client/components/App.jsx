import React, { useState } from "react";
import BeanData from "./BeanData";
import NewBeanData from "./NewBeanData";
import image1 from "../images/Africa.png";
import image2 from "../images/Asia.png";
import image3 from "../images/Pacific.png";
import image4 from "../images/Latin America.png";
import image5 from "../images/Carribean.png";
import image6 from "../images/globe.jpeg";
import image7 from "../images/addBean.png";
import image8 from "../images/roasting-infographic-small.png";
import UpdateBean from "./UpdateBean";

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
  const [showUpdateBeanData, setShowUpdateBeanData] = useState(false);
  const [showNewBeanData, setShowNewBeanData] = useState(false);
  const [selectedBeanData, setSelectedBeanData] = useState(null);

  const handleBeanClick = () => {
    setShowBeanData(false);
    setShowRegions(false);
    setShowRoastingGraph(true);
    setShowUpdateBeanData(false);
    setShowNewBeanData(true);
  };

  const handleBeanSelected = (data) => {
    setSelectedBeanData(data);
    setShowBeanData(false);
    setShowRegions(false);
    setShowRoastingGraph(true);
    setShowUpdateBeanData(true);
    setShowNewBeanData(false);
  };

  const Header = () => {
    const headerImage = image6;

    const handleHeaderClick = () => {
      setShowBeanData(false);
      setShowRegions(true);
      setShowUpdateBeanData(false);
      setShowRoastingGraph(false);
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
    setSelectedRegion(id);
    setShowBeanData(true);
    setShowRoastingGraph(false);
    setShowUpdateBeanData(false);
    setShowNewBeanData(false);
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
      {showBeanData && (
        <BeanData
          region={selectedRegion}
          onBeanClick={handleBeanSelected}
          selectedBeanData={selectedBeanData}
          setShowUpdateBeanData={setShowUpdateBeanData}
        />
      )}
      {showRoastingGraph && (
        <div className="roastChart">
          <img src={image8} className="roastChart" alt="roastChart" />
          {showNewBeanData && <NewBeanData />}
          {showUpdateBeanData && (
            <UpdateBean
              selectedBeanData={selectedBeanData}
              setShowUpdateBeanData={setShowUpdateBeanData}
              setShowRoastingGraph={setShowRoastingGraph}
              setShowRegions={setShowRegions}
            />
          )}
        </div>
      )}
      <div className="NewBeanDataImage">
        <img
          className="NewBeanDataImage"
          src={image7}
          alt="Add Bean Data"
          onClick={handleBeanClick}
        />
      </div>
      <footer className="footer">Copywright</footer>
    </div>
  );
};

export default App;
