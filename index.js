const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const featuredProductsCollections = client
      .db("pc-builder")
      .collection("products");
    const monitorCollections = client.db("pc-builder").collection("monitors");
    const motherboardsCollections = client
      .db("pc-builder")
      .collection("motherboards");
    const keyboardsCollections = client
      .db("pc-builder")
      .collection("keyboards");
    const ramsCollections = client.db("pc-builder").collection("rams");
    const processorsCollections = client
      .db("pc-builder")
      .collection("processors");
    const mousesCollections = client
      .db("pc-builder")
      .collection("mouses");
    const powerSupplyCollections = client
      .db("pc-builder")
      .collection("power-supply");
    const storagesCollections = client
      .db("pc-builder")
      .collection("storages");

    //all featured Products

    app.get("/products", async (req, res) => {
      const data = await featuredProductsCollections.find({}).toArray();
      res.json({
        data,
      });
    });
    app.get("/products/:id", async (req, res) => {
      const { id } = req.params;
      const data = await featuredProductsCollections.findOne({
        _id: new ObjectId(id),
      });
      res.json({
        data,
      });
    });
    //featured products category MONITOR
    app.get("/monitors", async (req, res) => {
      const data = await monitorCollections.find({}).toArray();
      res.json({
        data,
      });
    });
    //featured products category MOTHERBOARD
    app.get("/motherboards", async (req, res) => {
      const data = await motherboardsCollections.find({}).toArray();
      res.json({
        data,
      });
    });
    //featured products category KEYBOARDS
    app.get("/keyboards", async (req, res) => {
      const data = await keyboardsCollections.find({}).toArray();
      res.json({
        data,
      });
    });
    //featured products category RAMS
    app.get("/rams", async (req, res) => {
      const data = await ramsCollections.find({}).toArray();
      res.json({
        data,
      });
    });
    //featured products category PROCESSORS
    app.get("/processors", async (req, res) => {
      const data = await processorsCollections.find({}).toArray();
      res.json({
        data,
      });
    });
    //featured products category MOUSES
    app.get("/mouses", async (req, res) => {
      const data = await mousesCollections.find({}).toArray();
      res.json({
        data,
      });
    });
    //featured products category POWER-SUPPLY
    app.get("/power-supply", async (req, res) => {
      const data = await powerSupplyCollections.find({}).toArray();
      res.json({
        data,
      });
    });
    //featured products category STORAGES
    app.get("/storages", async (req, res) => {
      const data = await storagesCollections.find({}).toArray();
      res.json({
        data,
      });
    });
  } finally {
  }
}
run().catch(console.log());

app.get("/", (req, res) => {
  res.json("successfully get this data");
});
app.listen(port, () => console.log("Done"));
