import React, { useEffect, useState } from "react";

const BeanData = ({ region }) => {
  const [beanData, setBeanData] = useState({}); // State to store the fetched data

  useEffect(() => {
    fetch("/api/BeanData")
      .then((res) => res.json())
      .then((data) => {
        setBeanData(data); // Update the state with the fetched data
      });
  }, [region]);
  //change the divs to a table and add a class id to the h2 so that we can show/hide it.
  //use the region, country, bean name, bean roast, and flavor notes as the column names and the returned information as the values.
  return (
    <div className="beanTableClass">
      <h2 id="beanHeader" className="title">
        Bean Data
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
                  <tr key={data.beanName || index}>
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
    </div>
  );
};

export default BeanData;
