const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, mongoDBURL } = require("./config.js");
const bookRouter = require("./routes/booksRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/books", bookRouter);

const serverPort = PORT || 5555;

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to database");
    app.listen(serverPort, () => {
      console.log("Server is listening to port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
