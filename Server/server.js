const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//DataBase Server
const User = require("./models/userSchema");
const mongoDB =
  "mongodb+srv://dtamilselvan1004:hSrjYCcCOpg71Ihr@information.nbrha20.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.error(`Error in Connecting Data Base ${err}`);
  });
//pages
app.get("/", (res, req) => {
  req.send("Hello World!");
});

app.post(
  "/submit",

  async (req, res) => {
    const data = new User(req.body);

    await data.save();
  }
);
app.get("/users", async (req, res) => {
  try {
  //   // Fetch data from the database using your model
   const data = await User.find();

  
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
  
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
