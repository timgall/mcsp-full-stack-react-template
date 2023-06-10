import React, { useEffect, useState } from "react";

const NewBeanData = () => {
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [beanname, setBeanname] = useState("");
  const [beanroast, setBeanroast] = useState("");
  const [flavornotes, setFlavornotes] = useState("");

  useEffect(() => {
    if (
      region !== "" &&
      country !== "" &&
      beanname !== "" &&
      beanroast !== "" &&
      flavornotes !== ""
    ) {
      const data = {
        region: region,
        country: country,
        beanname: beanname,
        beanroast: beanroast,
        flavornotes: flavornotes,
      };

      fetch("/api/BeanData", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [region, country, beanname, beanroast, flavornotes]);

  const handleUpdateData = () => {
    const data = {
      region: region,
      country: country,
      beanname: beanname,
      beanroast: beanroast,
      flavornotes: flavornotes,
    };

    const beanId = "your-bean-id";
    fetch(`/api/BeanData/${beanId}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const beanId = "your-bean-id";

    fetch(`/api/BeanData/${beanId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="NewBeanData">
      <h2>Add or Update Bean Information Here</h2>
      <input
        type="text"
        className="inputField"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        placeholder="Region"
      />
      <input
        type="text"
        className="inputField"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
      />
      <input
        type="text"
        className="inputField"
        value={beanname}
        onChange={(e) => setBeanname(e.target.value)}
        placeholder="Bean Name"
      />
      <input
        type="text"
        className="inputField"
        value={beanroast}
        onChange={(e) => setBeanroast(e.target.value)}
        placeholder="Bean Roast"
      />
      <input
        type="text"
        className="inputField"
        value={flavornotes}
        onChange={(e) => setFlavornotes(e.target.value)}
        placeholder="Flavor Notes"
      />
      <button onClick={handleUpdateData}>Update Bean Data</button>
      <button>Delete Bean Data</button>
    </div>
  );
};

export default NewBeanData;
