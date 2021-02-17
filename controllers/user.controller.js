const  express = require('express');
const { user, schemaValidation } = require('../model/user.model');
const router = express.Router();
require('../middlewares/user.middleware');

router.get("/home", (req, res) =>{
    res.send("Welcome to Guigozi mini-supermarket");
})

router.get('/users', isAdmin, (req, res) => {
    const users = user.find({
        id: 1,
        userName: 1,
    })
    res.send(users);
})
router.get('/welcome page', (req, res) =>{
    res.setHeader("Welcome page");
    res.send("We are here to provide good quality and skills");
})
router.post('./createUser',async (req, res)=>{
    try {
        const {error} = schemaValidation(req.body);
        if(error){
            return res.send(error.details[0].message);  
        }else{
            const sameEmail = user.findOne({email: req.body.email});
            if(sameEmail)
            return res.send({status: 201, message: "The email arleady exist"});

            const newUser = new user(req.body)
            await newUser.save();
            res.send({status:200, message: "Created", data: newUser});
        }

    } catch (error) {
        res.send({status: 201, message: error});
        process.exit(1);
    }
})

router.put('/updateUser/:id',async (req, res) =>{
    try {
        const {error} = schemaValidation(req.body);
        if(error){
            return res.send(error.details[0].message);  
        }else{
            const sameEmail = user.findOne({email: req.body.email});
            if(sameEmail)
            return res.send({status: 201, message: "The email arleady exist"});

            const updateUser = await user.findOneAndUpdate({_id: id},req.body);
            res.send({status: 200, message: "Updated", data: updateUser});
        }
    } catch (error) {
        res.send({status: 201, message: error});
        process.exit(1);
    }
})

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const deletePerson = await user.findOneAndDelete({_id: id});
        res.send({status: 200, message: "Deleted"});
    } catch (error) {
        res.send({status: 201, message: error});
        process.exit(1);
    }
})

module.exports = router;