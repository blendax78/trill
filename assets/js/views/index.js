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

    this.cards.on('cardsSync', function(board_id) {
      // 'this' refers to this.cards in this context.

      if (this.models.length > 0 && this.at(0).get('idBoard') === board_id && !this.rendered) {
        self.render(self.current_board);
        this.rendered = true;
      }
    });

    this.on('attachmentsSync', function(attachments) {
      if (attachments.length > 0) {
        var first = attachments.shift();
        var container = $('#' + first.get('card_id'));

        container.append(ich.attachment_template({ attachments: attachments.toJSON()}));
        var attachment = attachments.at(0);

        if (attachment && attachment.get('thumbnail') && container.closest('.grid-stack-item').length > 0) {
          var griditem = container.closest('.grid-stack-item').data('_gridstack_node');
          var thumb = attachment.get('thumbnail');
          var w = 3;
          var h = 3;
          if (thumb.width > 400) {
            w = 6;
          }
          
          if (thumb.height > 400) {
            h = 6;
          }
          
          self.grid.resize(griditem.el, w, h);
        }
      }
    });

    this.boards.on('sync', function() {

      self.current_board = this.at(0);
      // 'this' refers to this.boards in this context.
      $('#board_change').html(ich.board_change_template({ boards: this.toJSON() }).html());

      for (var i in this.models) {
        self.lists.fetch(this.models[i].get('id'));
        self.cards.fetch(this.models[i].get('id'), self.current_board.get('id'));
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
    var cards = _.map(this.cards.where({ idBoard: board.get('id')}), function(card) {
      card.attachmentsJSON = card.renderAttachments();
      return card.toJSON();
    });

    $(this.el).html(ich.main_board_template({ board: board.toJSON(), cards: cards, lists: [] }).html());

    $('body').css('backgroundColor', board.attributes.prefs.backgroundColor);
    
    var options = {
        animate: true
    };
    $('.grid-stack').gridstack(options);
    this.grid = $('.grid-stack').data('gridstack');

    // For some reason, backbone can't bind events to bootstrap menus.
    $('.board-select').on('click', this.changeBoard);
  }
});
