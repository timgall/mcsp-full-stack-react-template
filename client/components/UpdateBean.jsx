import React, { useState, useEffect } from "react";

const UpdateBean = ({
  selectedBeanData,
  setShowUpdateBeanData,
  setShowRoastingGraph,
  setShowRegions,
}) => {
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [beanname, setBeanname] = useState("");
  const [beanroast, setBeanroast] = useState("");
  const [beanflavornotes, setBeanflavornotes] = useState("");

  useEffect(() => {
    if (selectedBeanData) {
      setRegion(selectedBeanData.region || "");
      setCountry(selectedBeanData.country || "");
      setBeanname(selectedBeanData.beanname || "");
      setBeanroast(selectedBeanData.beanroast || "");
      setBeanflavornotes(selectedBeanData.beanflavornotes || "");
    }
  }, [selectedBeanData]);

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

      fetch(`/api/BeanData/${selectedBeanData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(selectedBeanData.id);
          if (res.ok) {
            alert("Bean Successfully Updated");
            setRegion("");
            setCountry("");
            setBeanname("");
            setBeanroast("");
            setBeanflavornotes("");
            setShowUpdateBeanData(false);
            setShowRoastingGraph(false);
            setShowRegions(true);
          } else {
            alert("Sorry, we have encountered an error.");
            console.log(data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleDeleteBean = () => {
    fetch(`/api/BeanData/${selectedBeanData.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Bean Successfully Deleted");
          setShowUpdateBeanData(false);
          setShowRoastingGraph(false);
          setShowRegions(true);
          setShowUpdateBeanData(false);
        } else {
          alert("Sorry, we have encountered an error.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="UpdateBeanData">
      <h2>Update Bean Information Here</h2>
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
      <button onClick={handleDeleteBean}>Delete Bean</button>
    </div>
  );
};

export default UpdateBean;
