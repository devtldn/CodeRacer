const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

const routes = require("./routes/api.js");
app.use(routes);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coderacer");

app.listen(PORT, () => {
    console.log(`CodeRacer is now running on PORT: ${PORT}`);
});
