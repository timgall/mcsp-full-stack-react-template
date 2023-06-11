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

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
