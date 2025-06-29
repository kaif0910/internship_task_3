const { Order, Product } = require('../models');

exports.placeOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const order = await Order.create({ productId, quantity, userId: req.user.id });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { userId: req.user.id }, include: Product });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
