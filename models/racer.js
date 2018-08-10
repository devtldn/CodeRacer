const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const codeRacerSchema = new Schema({

});

const Racer = mongoose.model("Racer", codeRacerSchema);

module.exports = Racer;