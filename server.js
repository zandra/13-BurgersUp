const express = require('express');
const connection = require('./config/connection');
const burgersController = require('./controllers/burgersController');

const app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// App workflow 
app.get('/', burgersController.homepage);

// get :id
// POST (/:id) ---> burger name 
// UPDATE (:id) ----> devoured (True, False)


// Sanity check API requests
app.get('/api/burgers/', burgersController.apiGetAll);
app.get('/api/burgers/:id', burgersController.apiGetById);


app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});

