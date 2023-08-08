const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/products", require("./routes/productRoutes"));

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
