function init() {
  Trill.Client.Trello = Trello;

  Trill.Client.Trello.authorize({
    type: 'redirect',
    name: 'Trill',
    persist: true,
    scope: { read: true, write: true, account: true },
    expiration: '30days',
    success: function() {
      Trill.Models.Me.fetch({
        success: function() {
          Trill.Views.IndexView = new IndexView();
          Trill.Views.IndexView.render();
        }
      });
    },
    error: function() {
      console.log('error');
    }
  });

}

