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

    _.bindAll(this, 'changeBoard', 'renderBoard');

    $('#body').on('boardsSync', function() {
      this.current_board = this.current_board || this.boards[0];
      self.renderBoard(this.current_board);
      $('#board_change').html(ich.board_change_template({ boards: self.boards.models }).html());
    });

    this.boards.on('sync', function() {
      self.current_board = this.models[0];
      // 'this' refers to this.boards in this context.
      for (var i in this.models) {
        self.lists.fetch(this.models[i].get('id'));
        self.cards.fetch(this.models[i].get('id'));
      }

      self.renderBoard(self.current_board);
    });

    this.boards.fetch();
  },
  
  changeBoard: function(evt) {
    var $elem = $(evt.target);
    
    var board = _.findWhere(this.boards.models, { id: $elem.data().id });
    this.current_board = board;
    this.renderBoard(board);
  },
  
  renderBoard: function(board) {
    $(this.el).html(ich.main_board_template({ board: board, lists: [] }).html());
    $('body').css('backgroundColor', board.attributes.prefs.backgroundColor);
    
    var options = {
        animate: true
    };
    $('.grid-stack').gridstack(options);
  },

  render: function() {
  }
});
