const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Existing payment endpoint
app.get('/payment_methods', (req, res) => {
  res.json({ message: 'Payment methods' });
});

// New cart endpoint
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.json({ message: `Payment methods for cart ${cartId}` });
});

// Catch-all for non-numeric cart ids
app.get('/cart/:id', (req, res) => {
  res.status(404).send('Cart ID must be a number');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
