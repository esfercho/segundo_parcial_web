const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
    {
        id: {type: Object},
        token: {type: String, require:true},
    }
);

module.exports = mongoose.model("Token", TokenSchema);