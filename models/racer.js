const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const codeRacerSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const Racer = mongoose.model("Racer", codeRacerSchema);

module.exports = Racer;