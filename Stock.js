const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    symbol: {
        type: String, 
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    percentChange: {
        type: Number,
        required: true,
    },
    marketTime: {
        type: String,
        required: true,
    }
})

module.exports = User = mongoose.model("stocks", StockSchema);