const jwt = require('jsonwebtoken');
const Account = require('../models/accountModel')

const authPassword = ( req, res, next ) => {
    try {
        //check token 
        const token = req.header("Authorization");
        if (!token) return res.status(400).json({msg: "Authentication failed. No token"})

        //validate
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // Get user from the token
        req.email = decoded.email

        next()
        
    }
    catch (err) {
        res.status(500).json({msg: err.message})
    }
};

module.exports = authPassword;