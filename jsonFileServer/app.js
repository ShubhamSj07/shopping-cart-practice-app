const express = require("express");
const cors = require("cors");
const app = express();

//my routes
const myRoutes = require("./routes");

app.use(express.json());
app.use(cors());

//routes
app.use("/api", myRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting server
app.listen(port, () => {
  console.log(`App is running.. at ${port}`);
});
