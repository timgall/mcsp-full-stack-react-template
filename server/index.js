import express from "express";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config({ path: "../.env" });

const server = express();
const PORT = process.env.PORT;
console.log(PORT);
server.use(express.static("public"));
server.use(express.json());

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
server.get("/api/BeanData", (req, res) => {
  db.query("SELECT * FROM BeanData")
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});
server.post("/api/BeanData", (req, res) => {
  const { region, country, beanname, beanroast, beanflavornotes } = req.body;
  if (!region || !country || !beanname || !beanroast || !beanflavornotes) {
    res.sendStatus(422);
    return;
  }
  db.query(
    "INSERT INTO BeanData(region, country, beanname, beanroast, beanflavornotes) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [region, country, beanname, beanroast, beanflavornotes]
  ).then((result) => {
    res.status(201).send(result.rows[0]);
  });
});
server.put("/api/BeanData/:id", (req, res) => {
  const { id } = req.params;
  const { region, country, beanname, beanroast, beanflavornotes } = req.body;
  db.query(
    "UPDATE BeanData SET region=$2, country=$3, beanname=$4, beanroast=$5, beanflavornotes=$6 WHERE id=$1 RETURNING *",
    [id, region, country, beanname, beanroast, beanflavornotes]
  )
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).send("Bean Data not found");
      } else {
        res.send(result.rows[0]);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

server.delete("/api/BeanData/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM userInfo WHERE id = $1", [id])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch(next);
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
