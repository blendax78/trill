Trill.Views.IndexView = Backbone.View.extend({
  el: '#body',

  events: {
      'click .board-select': 'changeBoard'
  },

  initialize: function() {
    var self = this;
    this.boards = new Trill.Collections.Boards();
    this.lists = new Trill.Collections.Lists();
    this.cards = new Trill.Collections.Cards();

    _.bindAll(this, 'changeBoard', 'render');

    this.cards.on('sync', function(board_id) {
      // 'this' refers to this.cards in this context.

      if (this.models.length > 0 && this.at(0).get('idBoard') === board_id && !this.rendered) {
        self.render(self.current_board);
        this.rendered = true;
      }
    });

    this.boards.on('sync', function() {

      self.current_board = this.at(0);
      // 'this' refers to this.boards in this context.
      $('#board_change').html(ich.board_change_template({ boards: this.toJSON() }).html());

      for (var i in this.models) {
        self.lists.fetch(this.models[i].get('id'));
        self.cards.fetch(this.models[i].get('id'));
      }
    });

    this.boards.fetch();
  },
  
  changeBoard: function(evt) {
    var $elem = $(evt.target);

    var board = this.boards.where({ id: $elem.data().id });

    this.current_board = board[0];
    this.render(this.current_board);
  },
  
  render: function(board) {
    var cards = this.cards.where({ idBoard: board.get('id')});
    console.log(cards);
    $(this.el).html(ich.main_board_template({ board: board.toJSON(), cards: cards, lists: [] }).html());

    $('body').css('backgroundColor', board.attributes.prefs.backgroundColor);
    
    var options = {
        animate: true
    };
    $('.grid-stack').gridstack(options);

    // For some reason, backbone can't bind events to bootstrap menus.
    $('.board-select').on('click', this.changeBoard);
  }
});
