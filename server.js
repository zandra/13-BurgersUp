const express = require('express');
// const favicon = require('serve-favicon')
const path = require('path');
const pug = require('pug');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

var PORT = process.env.PORT || 8080;

// View engine setup - Pug
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug'); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Require the models
const db = require('./models');

// Require the routes
const burgersController = require('./controllers/burgersController');
// App workflow 
app.get('/', burgersController.homepage);

// Add Burger
app.post('/api/', burgersController.addBurger);
// Update Burger
app.put('/api/:id', burgersController.devourBurger);
// Delete Burger
app.delete('/api/:id', burgersController.delBurger);

// Sanity check API Get calls
app.get('/api', burgersController.apiGetAll);
app.get('/api/:id', burgersController.apiGetById);


db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});

