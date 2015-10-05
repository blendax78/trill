Trill.Models.Card = Backbone.Model.extend({
  initialize: function() {
    var self = this;
    var attachments = new Trill.Collections.Attachments({ card_id: self.get('id') });
    attachments.fetch();

    this.set('attachments', attachments);
  }
});
