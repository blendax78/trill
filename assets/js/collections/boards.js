function Boards() {
  return {
    models: [],

    fetch: function(options) {
      var self = this;

      Trill.Client.Trello.get('members/me/boards').done(function(result) {
        self.models = [];
        var temp;
        for (var i in result) {
          temp = new Trill.Models.Board(result[i])
          self.models.push(temp);
        }

        if (options && options.success) {
          options.success.call(self, result);
        }

        // $(self).trigger('boardsSync');
      });
    },

    sort: function() {
      _.sortBy(this.models, 'name');
    }
  };
}

Trill.Collections.Boards = new Boards();