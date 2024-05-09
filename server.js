const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// dot config
dotenv.config();

// mongoDB connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

// test router

app.use("/api/v1/test", require("./routes/testRouter"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

// port
const PORT = process.env.PORT || 3000;

const MODE = process.env.DEV_MODE || "development";

// listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${MODE} ModeOn Port ${PORT}`.bgBlue.white
  );
});
