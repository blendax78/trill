function IndexView () {

  return {
    el: '#body',
    events: {
      '.board-select' : { event: 'click', function: 'changeBoard' }
    },

    bindEvents: function() {
      var self = this;

      for (var elem in this.events) {
        $(elem).on(this.events[elem].event, self[this.events[elem].function]);
      }
    },
    
    changeBoard: function(evt) {
      var $elem = $(evt.target);
      
      var board = _.findWhere(Trill.Collections.Boards.models, { id: $elem.data().id });
      Trill.Views.IndexView.renderBoard(board);
    },
    
    renderBoard: function(board) {
      $(this.el).html(ich.main_board_template({ board: board, lists: board.lists.models }).html());
      $('body').css('backgroundColor', board.attributes.prefs.backgroundColor);
      
      var options = {
          animate: true
      };
      $('.grid-stack').gridstack(options);
    },

    render: function() {
      var self = this;
      $('body').on('boardsSync', function() {
        self.renderBoard(Trill.Collections.Boards.current_board);
        $('#board_change').html(ich.board_change_template({ boards: Trill.Collections.Boards.models }).html());
        self.bindEvents();
      });

      var self = this;
      Trill.Collections.Boards.fetch();
    }
  }
}
