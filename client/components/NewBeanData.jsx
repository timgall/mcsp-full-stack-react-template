import React, { useState } from "react";

const NewBeanData = () => {
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [beanname, setBeanname] = useState("");
  const [beanroast, setBeanroast] = useState("");
  const [beanflavornotes, setBeanflavornotes] = useState("");

  const handleAddBeanInfo = () => {
    if (
      region !== "" &&
      country !== "" &&
      beanname !== "" &&
      beanroast !== "" &&
      beanflavornotes !== ""
    ) {
      const data = {
        region: region,
        country: country,
        beanname: beanname,
        beanroast: beanroast,
        beanflavornotes: beanflavornotes,
      };

      fetch("/api/BeanData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            alert("Bean Added Successfully!");
            setRegion("");
            setCountry("");
            setBeanname("");
            setBeanroast("");
            setBeanflavornotes("");
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
        value={beanflavornotes}
        onChange={(e) => setBeanflavornotes(e.target.value)}
        placeholder="Flavor Notes"
      />
      <button onClick={handleAddBeanInfo}>Add Bean Info</button>
    </div>
  );
};

export default NewBeanData;
