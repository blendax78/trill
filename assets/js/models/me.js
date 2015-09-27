function Me () {
  return {

    fetch: function(options) {
      var self = this;
      Trill.Client.Trello.members.get('me').done(function(result) {
        self.attributes = result;
        
        if (options && options.success) {
          options.success.call(self);
        }
      });
    },
  }
};

Trill.Models.Me = new Me();