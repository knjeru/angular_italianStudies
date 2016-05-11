var express = require('express');
var router = express.Router();
var Cards = require('../../../db/queries/cards.queries');

router.get('/:deck_id', function(req,res,next) {
    Cards.getCards(req.params.deck_id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
});

router.get('/deck/:card_id', function(req,res,next) {
    Cards.getCard(req.params.card_id)
        .then(function(data) {
            res.json(data)
        })
        .catch(function(err) {
            res.json(err)
        })
});

router.post('/:deck_id', function(req,res,next) {
    Cards.addCard(req.params.deck_id, req.body)
        .then(function() {
            res.json('success');
        })
        .catch(function(err){
            res.json(err);
        })
});

router.put('/edit/:card_id', function(req,res,next) {
    Cards.updateCard(req.params.card_id, req.body)
        .then(function(data) {
            res.json(data)
        })
        .catch(function(err) {
            res.json(err)
        })
});

router.put('/answer/:card_id', function(req,res,next) {
    Cards.answerCard(req.params.card_id, req.body)
        .then(function() {
            res.json('answered');
        })
        .catch(function(err) {
            res.json(err)
        })
});

router.delete('/:card_id', function(req,res,next) {
    Cards.deleteCard(req.params.card_id)
        .then(function(data) {
            res.json(data)
        })
        .catch(function(err) {
            res.json(err)
        })
});

module.exports = router;