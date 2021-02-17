const { required } = require("joi");

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/user', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then (console.log("mongodb connected successfully ..."))
.catch(error =>console.log(`there is an erro ${error}`));

require("./user.model");