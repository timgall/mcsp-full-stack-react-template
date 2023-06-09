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
server.get("/api/RegionCountry", (req, res) => {
  db.query("SELECT * FROM RegionCountry")
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
