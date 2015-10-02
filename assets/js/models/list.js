function List(model) {
  return {
    attributes: model,
    
    fetchLists: function() {
      var self = this;
      // this.attributes.lists = new Trill.Models.List();
      // this.attributes.lists.fetch({
      //   success: function(result) {
      //     console.log('success', result);
      //   }
      // });
    }
  }
}

// Only uninstantiated class is accessible via namespacing.
Trill.Models.List = List;
