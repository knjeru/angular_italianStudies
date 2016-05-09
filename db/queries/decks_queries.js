var knex = require('../knex');

function Decks() {
    return knex('decks');
}

module.exports = {

    getDecks: function() {
        return Decks()
    },

    getDeck: function(id) {
        return Decks()
            .where('id', id);
    },

    addDeck: function(id, body) {
        return Decks()
            .insert({
                user: id,
                subject: body.subject
            })
    },

    updateDeck: function(id, body) {
        return Decks()
            .where('id', id)
            .update({
                subject: body.subject
            })
    },

    deleteDeck: function(id) {
        return Decks()
            .where('id', id)
            .del()
    }
};