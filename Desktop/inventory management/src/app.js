const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const authroutes = require('./routes/auth.routes');
const productroutes = require('./routes/product.routes');

app.use('/login', authroutes);
app.use('/products', productroutes);


console.log("🔍 Mongo URI:", process.env.MONGODB_URI);


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

}).catch((err) => {
  console.error('DB connection error:', err.message);
});
