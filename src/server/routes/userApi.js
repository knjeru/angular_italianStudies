var express = require('express');
var router = express.Router();
var Users = require('../../../db/queries/users_queries');

router.get('/', function(req, res, next) {
  Users.getUsers()
      .then(function(users) {
        res.json(users);
      })
});

router.get('/:id', function(req, res, next) {
  Users.getUser(req.params.id)
      .then(function(user) {
        res.json(user);
      })
});

router.post('/', function(req, res, next) {
  Users.addUser(req.body)
      .then(function(data) {
        res.json('successful add', data);
      })
      .catch(function(err) {
        return res.json(err);
      })
});

router.put('/:id', function(req,res,next) {
  Users.updateUser(req.params.id, req.body)
      .then(function(data) {
        res.json('successful edit', data);
      })
});

router.delete('/:id', function(req,res,next) {
  Users.deleteUser(id)
      .then(function(data) {
        res.json('successful delete', data);
      })
})


module.exports = router;
