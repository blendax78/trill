function Cards(options) {
  return {
    options: options,
    models: [],

    fetch: function() {
      var self = this;
      var temp;
      console.log(self.options, 'lists/' + self.options.list_id.toString() + '/cards');
      Trill.Client.Trello.get('lists/' + self.options.list_id.toString() + '/cards', {
        success: function(results) {
          console.log('cards', results);
          for (var i in results) {
            console.log(i, results[i]);
            temp = new Trill.Models.Card(results[i]);
            self.models.push(temp);
          }
        },
        then: function(result) {
          console.log('then', result);
        }
      });
    },

    sort: function() {
      _.sortBy(this.models, 'name');
    }
  };
}

Trill.Collections.Cards = Cards;