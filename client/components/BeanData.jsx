import React, { useEffect, useState } from "react";
import UpdateBean from "./UpdateBean.jsx";

const BeanData = ({
  region,
  onBeanClick,
  selectedBeanData,
  setShowUpdateBeanData,
}) => {
  const [beanData, setBeanData] = useState({});

  useEffect(() => {
    fetch("/api/BeanData")
      .then((res) => res.json())
      .then((data) => {
        setBeanData(data);
        setShowUpdateBeanData(false);
      });
  }, [region]);

  const handleBeanSelected = (data) => {
    onBeanClick(data);
    console.log("Region was clicked");
  };

  return (
    <div className="beanTableClass">
      <h2 id="beanHeader" className="title">
        Coffee Bean Data
      </h2>
      <table className="bean-table">
        <thead>
          <tr>
            <th>Region</th>
            <th>Country</th>
            <th>Bean Name</th>
            <th>Bean Roast</th>
            <th>Flavor Notes</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(beanData) ? (
            beanData.map((data, index) => {
              if (data.region === region) {
                return (
                  <tr
                    onClick={() => handleBeanSelected(data)}
                    key={data.beanName || index}
                  >
                    <td>{data.region}</td>
                    <td>{data.country}</td>
                    <td>{data.beanname}</td>
                    <td>{data.beanroast}</td>
                    <td>{data.beanflavornotes}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      {selectedBeanData && <UpdateBean selectedBean={selectedBeanData} />}
    </div>
  );
};

export default BeanData;
