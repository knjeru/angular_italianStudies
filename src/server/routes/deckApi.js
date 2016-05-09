var express = require('express');
var router = express.Router();
var Decks = require('../../../db/queries/decks_queries');

router.get('/', function(req,res,next) {
    Decks.getDecks()
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
});

router.get('/:id', function(req,res,next) {
    Decks.getDeck(req.params.id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err)
        })
});

router.post('/:user_id', function(req,res,next) {
    Decks.addDeck(req.params.user_id, req.body)
        .then(function(data) {
            res.json('success');
        })
        .catch(function(err) {
            res.json(err)
        })
});

router.put('/:deck_id', function(req,res,next) {
    Decks.updateDeck(req.params.deck_id, req.body)
        .then(function(data) {
            res.status(200);
        })
        .catch(function(err) {
            res.json(err)
        })
});

router.delete('/:id', function(req,res,next) {
    Deck.deleteDeck(req.params.id)
        .then(function(data) {
            res.status(200)
        })
        .catch(function(err) {
            res.json(err)
        })
});



module.exports = router;