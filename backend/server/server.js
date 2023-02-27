const mongoose = require('mongoose');
const express = require('express');
const cors = required('cors');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const stripe = require('stripe')('pk_test_51Ma07NLwi4tFJPEKesm3Mdhhy78Q4XMXPC5xKZLOTT9V3LiFAA3sisJoH8Xwll3u8D4dmgwxK4yRry6ZnA5gaObV004bmsbzLy')

const appSt = express();
appSt.use(cors());
appSt.use(express.static("public"));
app.use(express.json());

appSt.post("/checkout", async (req, res) => {
  
  //Stripe 
  const items = req.body.items;
  let LineItems = {};
  items.foreach((item) => {
    LineItems.push( 
      {
        price: item.id,
        quantity: item.quantity
      }
    )
  })
});

const session = await stripe.checkout.session.create ({
  line_items: lineItems,
  mode: 'payment',
  success_url: "http://localhost:3000/OrderConfirmation",
  cancel_url: "http://localhost:3000/ShoppingCart"
});

res.send(JSON.stringify ({
    url:  session.url
}));

appSt.listen(4000, () => console.log("Listening on Port 4000"))

//Stripe

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://capstoneAdmin:SvQg1sqyLwWSwBPv@cluster0.3dwonfx.mongodb.net/biojewerlyDB?retryWrites=true&w=majority');
mongoose.connection.on('error', err => {
    logError(err);
  });

app.use(express.json());

//Stripe route
app.use("/api/stripe", stripe);

//Connect the routes and controllers
app.use('/api/goals', require('../routes/goalRoutes'));
app.listen(PORT, () => console.log(`Server runs on Port ${PORT}`));

//To run server type: 'npm start server'