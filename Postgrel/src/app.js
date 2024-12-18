const express = require("express");
const cors = require("cors");
const path = require("path");
const config = require("./config");
const router = require("./routes")
const app = express();

require("./database");

app.use(cors());
app.use(express.json());
app.use("/api", router);

const publicFolder = path.join(__dirname, "../public");



app.use(express.static(publicFolder));

app.listen(config.port, () => {
    console.log(`Application is running succesfully on url http://localhost:${config.port}`);
})
