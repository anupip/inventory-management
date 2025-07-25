const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  sku: String,
  image_url: String,
  description: String,
  quantity: Number,
  price: Number
});

mongoose.model('User', userSchema);
mongoose.model('Product', productSchema);

console.log("✅ Schemas defined for User and Product.");
