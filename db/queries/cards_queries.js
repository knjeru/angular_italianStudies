var knex = require('../knex');

function Cards(){
    return knex('cards')
}

module.exports = {

    getCards: function(id) {
        return Cards()
            .where('deck', id);
    },

    getCard: function(id) {
        return Cards()
            .where('deck', id);
    },

    addCard: function(deck_id, body) {
        return Cards()
            .where('deck', id)
            .insert({
                created_by: body.created_by,
                question: body.question,
                answer: body.answer
            })
    },

    updateCard: function(deck_id, body) {
        return Cards()
            .where('id', id)
            .update({

            })
    },

    answerCard: function(deck_id, body) {
        return Cards()
            .where('deck', deck_id)
            .update({
                correct_answer: body.correct_answer,
                incorrect_answer: body.incorrect_answer,
                answered_by: body.answered_by
            })
    },

    deleteCard: function(deck_id, body) {
        return Cards()
            .where('deck', deck_id)
            .del()
    }
}