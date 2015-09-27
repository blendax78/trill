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

