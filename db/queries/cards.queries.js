var knex = require('../knex');

function Cards(){
    return knex('cards')
}

module.exports = {

    getCards: function(deck_id) {
        return Cards()
            .where('deck', deck_id);
    },

    getCard: function(id) {
        return Cards()
            .where('id', id);
    },

    addCard: function(deck_id, body) {
        return Cards()
            .insert({
                deck: deck_id,
                created_by: body.created_by,
                question: body.question,
                answer: body.answer
            })
    },

    updateCard: function(card_id, body) {
        return Cards()
            .where('id', card_id)
            .update({
                question: body.question,
                answer: body.answer
            })
    },

    answerCard: function(card_id, body) {
        return Cards()
            .where('id', card_id)
            .update({
                correct_answer: body.correct_answer,
                incorrect_answer: body.incorrect_answer,
                answered_by: body.answered_by
            })
    },

    deleteCard: function(card_id, body) {
        return Cards()
            .where('deck', card_id)
            .del()
    }
}