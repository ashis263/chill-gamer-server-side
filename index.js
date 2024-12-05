const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server Running');
});

app.listen(port, () => {
  console.log("Server running on port: " + port);
})



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.fhbw5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const reviews = client.db("gameReviewDB").collection('reviews');
    const users = client.db("gameReviewDB").collection('users');

    app.post('/reviews', async (req, res) => {
      const result = await reviews.insertOne(req.body);
      res.send(result);
    })

    app.get('/reviews', async (req, res) => {
      const cursor = reviews.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.put('/users', async (req, res) => {
      const filter = { email: req.body.email };
      const updatedDoc = {
        $set: req.body
      }
      const options = { upsert: true};
      const result = await users.updateOne(filter, updatedDoc, options);
      res.send(result);
    })

  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
  // Ensures that the client will close when you finish/error
  // await client.close();
}
}
run().catch(console.dir);