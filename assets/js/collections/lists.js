function Lists(options) {
  return {
    options: options,
    models: [],

    fetch: function(options) {
      var self = this;
  
      Trill.Client.Trello.get('/boards/' + self.options.id.toString() + '/lists').done(function(result) {
        self.models = [];
        var temp;
        for (var i in result) {
          temp = new Trill.Models.List(result[i])
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