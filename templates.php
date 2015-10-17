<script id="board_change_template" type="text/html">
<div>
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Boards <span class="caret"></span></a>
  <ul class="dropdown-menu">
    {{#boards}}
      <li><a class="board-select" href="#" data-id={{id}} >{{name}}</a></li>
    {{/boards}}
  </ul>
</div>
</script>

<script id="main_board_template" type="text/html">
<div class="row">
  {{#board}}
    <h1>{{name}}</h1>
  {{/board}}
  <div class="grid-stack">
  {{#cards}}
    {{>card_template}}
  {{/cards}}
  </div>
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
    <p>
      <div class="card grid-stack-item-content" id="{{id}}">
        {{name}}
        
      </div>
    </p>
  </div>
</script>

<script id="attachment_template" type="text/html">
  <div>
    {{#attachments}}
      {{#thumbnail}}
        <img src="{{url}}" />
      {{/thumbnail}}
    {{/attachments}}
  </div>
</script>