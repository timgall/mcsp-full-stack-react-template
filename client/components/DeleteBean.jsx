import React, { useState } from "react";

const DeleteBean = () => {
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [beanname, setBeanname] = useState("");
  const [beanroast, setBeanroast] = useState("");
  const [beanflavornotes, setBeanflavornotes] = useState("");
  const handleUpdateBeanInfo = () => {
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
      fetch("/api/BeanData:id", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            alert("Bean Successfully Deleted");
            setRegion("");
            setCountry("");
            setBeanname("");
            setBeanroast("");
            setBeanflavornotes("");
          } else {
            alert(`Sorry, we have encountered an error. ${error}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="DeleteBean">
      <h2>Delete Bean Information Here</h2>
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
      <button onClick={handleUpdateBeanInfo}>Update Bean Info</button>
    </div>
  );
};

export default DeleteBean;
