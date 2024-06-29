const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startingPrice: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
  endTime: { type: Date, required: true },
  bids: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, required: true },
    bidTime: { type: Date, default: Date.now }
  }]
});

module.exports = mongoose.model('Product', ProductSchema);
