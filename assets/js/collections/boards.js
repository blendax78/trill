function Boards() {
  return {
    models: [],
    lists: [],
    cards: [],

    fetch: function(options) {
      var self = this;

      Trill.Client.Trello.get('members/me/boards').done(
        function(result) {
          self.models = [];
          var temp;
          for (var i in result) {
            if (result[i].closed) {
              continue;
            }

            temp = new Trill.Models.Board(result[i])
            temp.lists.fetch();

            self.models.push(temp);
          }

          self.sort();
          self.current_board = self.models[0];

          if (options && options.success) {
            options.success.call(self, result);
          }
      });
    },

    sort: function() {
      _.sortBy(this.models, function(model) {
        return model.attributes.name;
      });
    }
  };
}

Trill.Collections.Boards = new Boards();