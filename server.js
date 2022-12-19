const express = require('express');
const path = require('path');
const { dbConnection } = require('./database/config.js');
const Point = require('./models/punto.js');

require('dotenv').config();

const app = express()


//SETTINGS
app.set('port', process.env.PORT || 5000);



//START BASE DE DATOS
dbConnection();



//START SERVER 
app.listen(app.get('port'), () => {
  console.log('Server Listening on port ', app.get('port'));
});



//ROUTES
app.use(require('./routes'));
app.use('/api', require('./routes/api'));

//app.use('/deals', require('./src/routes/deals'));

//Routes
//app.use(express.static(path.join(__dirname, 'src/public')));


