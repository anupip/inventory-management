const Product = require('../models/product.model');

exports.addproduct = async (req, res) => {
  try {
    const newproduct = new Product(req.body);
    const saved = await newproduct.save();
    res.status(201).json({ product_id: saved._id });
  } catch (err) {
    res.status(400).json({ message: 'failed to add product', error: err.message });
  }
};

exports.updateproductquantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const updated = await Product.findByIdAndUpdate(id, { quantity }, { new: true });

    if (!updated) {
      return res.status(404).json({ message: 'product not found' });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'failed to update product', error: err.message });
  }
};

exports.getallproducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const data = await Product.find().skip(skip).limit(limit);
    const total = await Product.countDocuments();

    res.status(200).json({
      total,
      page,
      pagesize: data.length,
      products: data
    });
  } catch (err) {
    res.status(500).json({ message: 'failed to fetch products', error: err.message });
  }
};
