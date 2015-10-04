<script id="board_change_template" type="text/html">
<div>
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Boards <span class="caret"></span></a>
  <ul class="dropdown-menu">
    {{#boards}}
      {{#attributes}}
        <li><a class="board-select" href="#" data-id={{id}} >{{name}}</a></li>
      {{/attributes}}
    {{/boards}}
  </ul>
</div>
</script>

<script id="main_board_template" type="text/html">
<div class="row">
  {{#board}}
    {{#attributes}}
      <h1>{{name}}</h1>
    {{/attributes}}
    {{#lists}}
      {{#models}}
        {{>list_template}}
      {{/models}}
    {{/lists}}
  {{/board}}
</div>
</script>

<script id="list_template" type="text/html">
  <div class="row">
    {{#attributes}}
    <h4>{{name}}</h4>
    {{/attributes}}
    {{#cards}}
      <div class="grid-stack">
        {{#models}}
          {{>card_template}}
        {{/models}}
      </div>
    {{/cards}}
  </div>
</script>

<script id="card_template" type="text/html">
  <div class="grid-stack-item" data-gs-auto-position="1" data-gs-width="3" data-gs-height="3">
    {{#attributes}}
      <p>
        <div class="card grid-stack-item-content">{{name}}</div>
      </p>
    {{/attributes}}
  </div>
</script>