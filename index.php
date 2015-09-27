<?php
  $config = json_decode(file_get_contents('./config.json'));
?>
<html>
  <head>
    <title>Trill 0.1</title>
  </head>
  <body class="container">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Trill 0.1</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="dropdown" id="board_change"></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
    <div id="nav_container"></div>
    <div id="main_container"></div>
    <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="assets/gridstack/gridstack.min.css">
    <link rel="stylesheet" type="text/css" href="assets/gridstack/gridstack-extra.min.css">
    <?php include('templates.php'); ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Get your API Key here: https://trello.com/app-key -->
    <script src="https://api.trello.com/1/client.js?key=<?php print $config->api_key; ?>"></script>
    <script src="assets/js/libs/LAB.min.js"></script>
    <script>
      // Declares Javascript 'namespacing' and initializes router
      Trill = {};
      Trill.Views = {};
      Trill.Models = {}; // Note: The Models namespace will not hold instantiated objects.
      Trill.Collections = {};
      Trill.Client = {};

      $LAB
        .script('assets/bootstrap/js/bootstrap.min.js')
        .script('assets/js/libs/ICanHaz.min.js')
        .script('assets/js/libs/underscore-min.js').wait()
        .script('assets/gridstack/gridstack.min.js').wait()
        .script('assets/js/models/board.js').wait()
        .script('assets/js/models/me.js').wait()
        .script('assets/js/collections/boards.js').wait()
        .script('assets/js/views/index.js').wait()
        .script('assets/js/application.js').wait(function() {
          init();
        });
    </script>
  </body>
</html>
