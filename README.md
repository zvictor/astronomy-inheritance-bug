output:

```js

{"_id":"dZcc5fZqgbpCGfPYH","type":"Parent","parent":"1"}
{"_id":"pA3Kveky4TCbbuyss","type":"Child","parent":"3","child":"4"}
{"_id":"jWEcJ4hdSLvamXoxy","type":"Nested","parent":"5","embedded":{"_id":"dZcc5fZqgbpCGfPYH","type":"Parent","parent":"1"}}
{"_id":"4ZeTFSGx8LNoKoc8q","type":"Nested","parent":"7","embedded":{"_id":"pA3Kveky4TCbbuyss","type":"Parent","parent":"3"}}

In the Nested objects, in the key `embedded`, the nested objects should cast to their types.

```
