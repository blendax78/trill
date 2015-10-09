Trill.Models.Card = Backbone.Model.extend({
  initialize: function() {
    var self = this;
    var attachments = new Trill.Collections.Attachments({ card_id: self.get('id') });
    attachments.fetch();

    this.set('attachments', attachments);
  },

  renderAttachments: function() {
    var attachments = this.get('attachments').models;
    var attachmentsJSON = _.map(attachments, function(attachment) {
      return attachment.toJSON();
    });

    return attachmentsJSON;
  }
});
