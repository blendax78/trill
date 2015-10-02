function List(model) {
  return {
    attributes: model,
    cards: new Trill.Collections.Cards({ list_id: model.id }),
  }
}

// Only uninstantiated class is accessible via namespacing.
Trill.Models.List = List;
