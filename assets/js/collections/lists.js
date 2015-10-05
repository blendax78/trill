Trill.Collections.Lists = Backbone.Collection.extend({
  model: Trill.Models.List,

  initialize: function () {
  },

  comparator: function (board) {
    return board.get('name');
  },

  fetch: function(board_id) {
    var self = this;

    Trill.Client.Trello.get('/boards/' + board_id.toString() + '/lists').done(
      function(result) {
        var temp;
        for (var i in result) {
          if (result[i].closed) {
            continue;
          }

          temp = new Trill.Models.List(result[i]);
          self.models.push(temp);
        }

        self.trigger('sync');
    });
  },
});
