const express = require('express');
const burger = require('../models/burger');
const connection = require('../config/connection');

exports.homepage=( (req, res) => {
  connection.query(`SELECT * FROM burgers;`, (err, results) => {
    if(err) {
      console.log("OH NO 😵");
      res.send(500).end();
    }
    res.json(results);
  })
});



exports.apiGetAll = (req, res) => {
  connection.query(`SELECT * FROM burgers;`, (err, results) => {
    if(err) {
      console.log("OH NO 😵");
      res.send(500).end();
    }
    res.json(results);
  })
};

exports.apiGetById =  (req, res) => {
  connection.query(`SELECT * FROM burgers WHERE id= ?;`, [req.params.id], (err, results) => {
    if(err) {
      console.log("OH NO 😵");
      res.send(500).end();
    }
    res.json(results);
  })
};
