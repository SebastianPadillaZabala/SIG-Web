const express = require('express');
const path = require('path');

const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const { dbConnection } = require('./database/config.js');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();


//SETTINGS
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
/*app.engine('.hbs', exphbs.engine({
    defaultLayout:'main.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));*/


//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));





//START BASE DE DATOS
dbConnection();



//START SERVER 
app.listen(app.get('port'), () => {
  console.log('Server Listening on port ', app.get('port'));
});



//ROUTES
app.use(require('./routes/api/puntos'));


//Static files
app.use(express.static(path.join(__dirname, 'public')));


