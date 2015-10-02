function Board(model) {
  return {
    attributes: model,
    lists: new Trill.Collections.Lists({ board_id: model.id }),
  }
}

// Only uninstantiated class is accessible via namespacing.
Trill.Models.Board = Board;
