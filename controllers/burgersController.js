const db = require('../models');

exports.homepage=( (req, res) => {
  db.Burger.findAll().then( data => {
    res.render("index", ( {title: 'Burgers Up', burgers: data} ));
  })
});

// POST > create item 
exports.addBurger = ((req, res) => {
  db.Burger.create({
    burger_name: req.body.name
  }).then(data => {
    console.log(`${data.burger_name} burger with id ${data.id} successfully created`);
    res.json(data, null, 2);
  });
});

// PUT > update item 
exports.devourBurger = ((req, res) => {
  db.Burger.update({
    devoured: true
  },
  {
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.json(data);
  });
});

// DELETE > destroy item 
exports.delBurger = ((req, res) => {
  db.Burger.destroy(
  {
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.json(data);
    // data === 1 ? console.log("success!") : console.log("Oops");
  });
});

// Sanity Check API getAll and getOne
exports.apiGetAll =( (req, res) => {
  db.Burger.findAll().then(data => {
    res.json(data);
  });
});

exports.apiGetById = ((req, res) => {
  db.Burger.findOne({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.json(data);
  });
});
