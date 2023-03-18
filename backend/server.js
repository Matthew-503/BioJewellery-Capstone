//sk_test_51MmsESGqyagVRxA1BIBc0xVLZMDOG4GfABDTRgr0NT3lXCGOAAGIZbZg26QCacl0dQOx7IRLe4nlx2t1fUzL9vYN005qEnNnXX
//Cerradoleafearring TestMode ApiData: price_1MmsiHGqyagVRxA1Oce48my1

const mongoose = require('mongoose');
const express = require('express');
const { urlencoded } = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const colours  = require('colors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorHandler')

//allows any ip address to access our express server
var cors = require('cors');

//Initializing stripe client for our account using secret key
const stripe = require('stripe')('sk_test_51MmsESGqyagVRxA1BIBc0xVLZMDOG4GfABDTRgr0NT3lXCGOAAGIZbZg26QCacl0dQOx7IRLe4nlx2t1fUzL9vYN005qEnNnXX');


//Mongodb connections
connectDB();

app.use(express.json());
app.use(urlencoded({extended: false}));

app.use(cors());

//allows to serve static files from public directory to client, recommended by stripe doc.
app.use(express.static('public'));

//Connect the routes and controllers
//For all product routes
app.use('/api/product', require('./routes/productRoutes.js'));

//User routes 
app.use('/api/account', require('./routes/accountRoutes.js'));

//Review routes
app.use('/api/product/:productId/reviews', require('./routes/reviewRoutes.js'));

//Cart routes
app.use('/api/cart', require('./routes/cartRoutes.js'));

//Order routes
app.use('/api/order', require('./routes/orderRoutes.js'));

//Address routes
app.use('/api/addresses', require('./routes/addressRoutes.js'));

app.use(errorHandler);

//Stripe request
app.post("/checkout", async(req, res) => {

    const items = req.body.cartItems;

    //data formatting for stripe
    let lineItems = [];

    items.forEach((item) => {
        lineItems.push({
            price: item.product.priceApiId,
            quantity: item.quantity
        })
    });

    //initializing Stripe session
    const session = await stripe.checkout.sessions.create({
        line_items : lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    //sending response to front end
    res.send(JSON.stringify({
        url: session.url
    }));
})

app.listen(PORT, () => console.log(`Server runs on Port ${PORT}`));

//To run server type: 'npm start server'