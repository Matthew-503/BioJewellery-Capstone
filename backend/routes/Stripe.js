// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require('stripe')('sk_test_Hrs6SAopgFPF0bZXSN3f6ELN');
const express = require('express');
const app = express();
app.use(express.static('public'));

const router = express.Router() 

const YOUR_DOMAIN = 'http://localhost:3000';

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/checkout`,
    cancel_url: `${YOUR_DOMAIN}/cart`,
  });

  res.send(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));