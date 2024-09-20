const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Middleware to parse JSON body

// Existing endpoint for /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.json({ message: `Payment methods for cart ${cartId}` });
});

// New endpoint for /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// New endpoint for /login
app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.json({ message: `Welcome ${username}` });
});

// Start the server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
