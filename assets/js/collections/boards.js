Trill.Collections.Boards = Backbone.Collection.extend({
  model: Trill.Models.Board,

  initialize: function () {
  },

  comparator: function (board) {
    return board.get('name');
  },

  fetch: function(options) {
    var self = this;

    Trill.Client.Trello.get('members/me/boards').done(
      function(result) {
        var temp;
        for (var i in result) {
          if (result[i].closed) {
            continue;
          }

          temp = new Trill.Models.Board(result[i])
          // temp.lists.fetch();

          self.models.push(temp);
        }

        self.sort();
        self.current_board = self.models[0];
        self.trigger('sync');
    });
  },
});
