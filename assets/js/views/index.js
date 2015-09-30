function IndexView () {

  return {
    el: '#main-container',
    events: {
      '.board-select' : { event: 'click', function: 'changeBoard' }
    },
    
    bindEvents: function() {
      var self = this;

      for (var elem in this.events) {
        console.log($(elem), this.events[elem].event);
        $(elem).on(this.events[elem].event, self[this.events[elem].function]);
      }
      
    },
    
    changeBoard: function(evt) {
      console.log('click', evt);
    },

    render: function() {
      // $(Trill.Collections.Boards).on('boardsSync', function() {
      //   $('#board_change').append(ich.board_change_template({ boards: result }).html());
      // });

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
