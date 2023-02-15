//This controller module is for functions of what to do with the given request from the routes
const getGoals = async (req, res) => {
    //Check if it's a bad request (400)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({message:'Get goals'});
}

const setGoals = async (req, res) => {
    res.status(200).json({message:'Set goals'});
}

const updateGoals = async (req, res) => {
    res.status(200).json({message:`Update goal${req.params.id}`});
}

const deleteGoals = async (req, res) => {
    res.status(200).json({message:`Delete goal${req.params.id}`});
}
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}