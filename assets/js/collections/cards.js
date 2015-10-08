Trill.Collections.Cards = Backbone.Collection.extend({
  model: Trill.Models.Card,

  initialize: function () {
  },

  comparator: function (card) {
    return card.get('name');
  },

  fetch: function(board_id, current_board_id) {
    var self = this;
    var temp;

    Trill.Client.Trello.get('boards/' + board_id.toString() + '/cards').done(
      function(results) {
        for (var i in results) {
          if (results[i].closed) {
            continue;
          }

          temp = new Trill.Models.Card(results[i]);
          self.models.push(temp);
        }

        if (results[0] && results[0].idBoard && results[0].idBoard === current_board_id) {
          // Start rendering the cards for the currently selected board.
          self.trigger('cardsSync', self.at(0).get('idBoard'));
        }
        self.trigger('sync', self.at(0).get('idBoard'));
    });
  },
});
