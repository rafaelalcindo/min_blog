let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
let fileUpload = require('express-fileupload');
let cors = require('cors');

let app = express();
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(fileUpload());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

consign()
    .include('app/routes')
    .then('config/dbConnectionMongoDB.js')
    .then('app/controller')
    .then('app/models')
    .into(app)

module.exports = app;

