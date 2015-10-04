function IndexView () {

  return {
    el: '#main-container',
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
      var arr = _.filter(Trill.Collections.Boards.models, function(board) {
        console.log(board.attributes, $elem.data().id);
        return _.some(board.attributes, { id: $elem.data().id });
      });
      console.log(arr);
    },
    
    renderBoard: function(board) {
      $('#body').html(ich.main_board_template({ board: board.attributes }).html());
      $('body').css('backgroundColor', board.attributes.prefs.backgroundColor);
    },

    render: function() {
      var self = this;
      $(Trill.Collections.Boards).on('boardsSync', function() {
        self.renderBoard(Trill.Collections.Boards.current_board);
      });

      var self = this;
      Trill.Collections.Boards.fetch({
        success: function(result) {
          $('#board_change').html(ich.board_change_template({ boards: result }).html());
          self.bindEvents();
        }
      });
      // var template = ich.bookmark_template({ models: this.collection.toJSON() });
      // this.$el.html(template);


    }
  }
}
