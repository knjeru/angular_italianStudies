var knex = require('../knex');

function Decks() {
    return knex('decks');
}

module.exports = {

    getDecks: function(id) {
        console.log(id);
        return Decks()
            .where('user', id);
    },

    getDeck: function(id) {
        return Decks()
            .where('id', id);
    },

    addDeck: function(id, body) {
        return Decks()
            .insert({
                user: id,
                subject: body.subject,
                deck_cover: body.deck_cover
            })
            .returning('id')
            .into('decks');
    },

    updateDeck: function(id, body) {
        return Decks()
            .where('id', id)
            .update({
                subject: body.subject,
                deck_cover: body.deck_cover
            })
    },

    deleteDeck: function(id) {
        return Decks()
            .where('id', id)
            .del()
    }
};