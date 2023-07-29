const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qg5qmf2.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const featuredProductsCollections = client.db("pc-builder").collection("products");
    
    console.log(uri, "database connect successfully");
  } finally {
  }
}
run().catch(console.log());

app.get("/", (req, res) => {
  res.json("successfully get this data");
});
app.listen(port, () => console.log("Done"));
