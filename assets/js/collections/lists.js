function Lists(options) {
  return {
    options: options,
    models: [],

    fetch: function() {
      var self = this;

      Trill.Client.Trello.get('/boards/' + self.options.board_id.toString() + '/lists').done(
        function(result) {
          self.models = [];
          var temp;
          for (var i in result) {
            if (result[i].closed) {
              continue;
            }

            temp = new Trill.Models.List(result[i]);
            temp.cards.fetch();
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

Trill.Collections.Lists = Lists;