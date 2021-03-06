var express = require('express');
var router = express.Router();
var Decks = require('../../../db/queries/decks.queries');

router.get('/:user_id', function(req,res,next) {
    Decks.getDecks(req.params.user_id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
});

router.get('/deck/:id', function(req,res,next) {
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
            res.json({
                status: 'success',
                id: data
            });
        })
        .catch(function(err) {
            res.json(err)
        })
});

router.put('/:deck_id', function(req,res,next) {
    Decks.updateDeck(req.params.deck_id, req.body)
        .then(function(data) {
            res.json({
                status: 200,
                message: 'edited!'
            })
        })
        .catch(function(err) {
            res.json(err)
        })
});

router.delete('/:id', function(req,res,next) {
    Decks.deleteDeck(req.params.id)
        .then(function(data) {
            res.json({
                status: 200,
                message: 'deleted!'
            })
        })
        .catch(function(err) {
            res.json(err)
        })
});



module.exports = router;