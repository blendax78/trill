function Cards(options) {
  return {
    options: options,
    models: [],

    fetch: function() {
      var self = this;
      var temp;

      Trill.Client.Trello.get('lists/' + self.options.list_id.toString() + '/cards').done(
        function(results) {
          for (var i in results) {
            temp = new Trill.Models.Card(results[i]);
            self.models.push(temp);
          }
      });
    },

    sort: function() {
      _.sortBy(this.models, 'name');
    }
  };
}

Trill.Collections.Cards = Cards;