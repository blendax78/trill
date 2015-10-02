function Card(model) {
  return {
    attributes: model,
  }
}

// Only uninstantiated class is accessible via namespacing.
Trill.Models.Card = Card;
