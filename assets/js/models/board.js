function Board(model) {
  return {
    attributes: model,
    
    fetchLists: function() {
      var self = this;
      this.attributes.lists = new Trill.Collections.Lists({ id: self.attributes.id });
      this.attributes.lists.fetch({
        success: function(result) {
          console.log('returning lists here. add lists to board', result);
          // self.attributes.models = self.attributes
        }
      });
    }
  }
}

// Only uninstantiated class is accessible via namespacing.
Trill.Models.Board = Board;
