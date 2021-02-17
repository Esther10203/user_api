const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./controllers/user.controller');
require('./model/db');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.use('/app', userController);
app.listen(port, () => {
    console.log(`app is listening at port ${port} ...`);
})