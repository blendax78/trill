Trill.Collections.Attachments = Backbone.Collection.extend({
  model: Trill.Models.Attachment,

  initialize: function (options) {
    this.options = options;
  },

  fetch: function(card_id) {
    var self = this;
    var temp;

    Trill.Client.Trello.get('cards/' + this.options.card_id.toString() + '/attachments').done(
      function(results) {
        for (var i in results) {
          temp = new Trill.Models.Attachment(results[i]);
          self.models.push(temp);
        }
    });
  }
});
