Trill.Models.Attachment = Backbone.Model.extend({
  initialize: function() {
    this.findThumbnail();
  },
  
  findThumbnail: function() {
    var thumbnail = _.last(this.get('previews'));

    if (thumbnail) {
      this.set('thumbnail', thumbnail);
    }
  }
});
