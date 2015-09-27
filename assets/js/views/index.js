function IndexView () {

  return {
    el: '#main-container',

    render: function() {
      // $(Trill.Collections.Boards).on('boardsSync', function() {
      //   $('#board_change').append(ich.board_change_template({ boards: result }).html());
      // });

      Trill.Collections.Boards.fetch({
        success: function(result) {
          $('#board_change').append(ich.board_change_template({ boards: result }).html());
        }
      });
      // var template = ich.bookmark_template({ models: this.collection.toJSON() });
      // this.$el.html(template);


    }
  }
}
