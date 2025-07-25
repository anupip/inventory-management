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

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('mongodb connected');
  app.listen(process.env.PORT || 8080, () => {
    console.log(`server running on port ${process.env.PORT || 8080}`);
  });
}).catch((err) => {
  console.error('db connection error:', err.message);
});
