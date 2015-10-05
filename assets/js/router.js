var Router = Backbone.Router.extend({

  routes: {
      "": "index"
  },

  initialize: function() {
  },

  index: function() {
    this.indexView = new Trill.Views.IndexView;
    this.indexView.render();
  }

});
