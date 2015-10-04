Trill
==============
A web app that uses the Trello API and reorganizes boards into grids.


**Note**: In progress
Basic setup: Requires a config.json to be in the root folder (same as index.php). It should look something like:
```
  {
    "api_key" : "<key>",
    "api_secret" : "<secret>"
  }
```

**To Do**
Speed up initial load
convert to backbone
fetch attachments (GET /1/cards/[card id or shortlink]/attachments)