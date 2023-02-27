const express = require('express'); 
const router = express.Router();
const { getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalController')
/*
This is to chain routes together 
which is done by stating the route to check and chaining 
the request that will be permitted via that route 

This route is for getting and Setting(Creating) goals
*/
router.route('/products/:id').get(getGoals);
router.route('/Newproduct').post(setGoals);
/* 
Same thing as the top route

This is for updating and deleting goals
*/
router.route('/:id').put(updateGoals).delete(deleteGoals);

module.exports = router;