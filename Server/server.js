const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());

const url = process.env.MONGO_URL;

mongoose.connect(url)
.then(() => console.log("MongoDB is connected..."))
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});