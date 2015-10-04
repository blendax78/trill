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
<div>
  {{#board}}
    {{name}}
  {{/board}}
</div>
</script>

<script id="card_template" type="text/html">
  <div class="card">
    {{name}}
  </div>
</script>