function Board(model) {
  return {
    attributes: model
  }
}

// Only uninstantiated class is accessible via namespacing.
Trill.Models.Board = Board;
