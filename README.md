# Kripp

Named after the very best Black Lion Trading Company employee there is, Kripp is a REST API designed to store trading data. It supports cross–domain AJAX requests via CORS.

## Setup

- `brew install mongodb`
- `npm install -g nodemon`
- `npm install`
- `nodemon app.js`

## Endpoints

- `GET /trades` – list all trades
- `POST /trades` – create a new trade
- `GET /trades/:id` – get one trade
- `PUT /trades/:id` – update one trade
- `DELETE /trades/:id` – delete one trade

## Schema

### Trade

    {
        "itemid": 39527,
        "activity": [
            {"action": "ordered", "quantity": 2, "value": 116.50, "total": 0},
            {"action": "bought",  "quantity": 1, "value": 116.50, "total": -116.50},
            {"action": "listed",  "quantity": 1, "value": 199.50, "total": -9.98},
            {"action": "sold",    "quantity": 1, "value": 199.50, "total": 179.55}
        ],
        "ordered": 2,
        "bought": 1,
        "listed": 1,
        "sold": 1,
        "balance": 53.07
    }

## Error handling

Errors are returned with a 200 code in the following format:

    {
        "status": "error",
        "error": "Verbose error message goes here telling you what went wrong"
    }

## Examples

*Add*
curl -i -X POST -H 'Content-Type: application/json' -d '{"itemid":39527,"activity":[{"action":"ordered","quantity":2,"value":116.5,"total":0},{"action":"bought","quantity":1,"value":116.5,"total":-116.5},{"action":"listed","quantity":1,"value":199.5,"total":-9.98},{"action":"sold","quantity":1,"value":199.5,"total":179.55}],"ordered":2,"bought":1,"listed":1,"sold":1,"balance":53.07,"archived":false}' http://localhost:3000/trades

*Update*
curl -i -X PUT -H 'Content-Type: application/json' -d '{"itemid":39527,"activity":[{"action":"ordered","quantity":2,"value":116.5,"total":0},{"action":"bought","quantity":1,"value":116.5,"total":-116.5},{"action":"listed","quantity":1,"value":199.5,"total":-9.98},{"action":"sold","quantity":1,"value":199.5,"total":179.55},{"action":"bought","quantity":1,"value":116.5,"total":-116.5},{"action":"listed","quantity":1,"value":199.5,"total":-9.98},{"action":"sold","quantity":1,"value":199.5,"total":179.55}],"ordered":2,"bought":2,"listed":2,"sold":2,"balance":106.14,"archived":false}' http://localhost:3000/trades/52e98ed133335b0000de67a1

*Remove*
curl -i -X DELETE http://localhost:3000/trades/52e98dc649441a0000de4136
