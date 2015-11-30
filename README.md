From the Inheritance section in the docs:
> When fetching the given document from the collection, the transform function will automatically fetch an instance of proper class.

This is true, but not when the document is nested. In that case, there is not magic transforming the instance to the proper class.

`meteor` output of this project:

```js

{"_id":"dZcc5fZqgbpCGfPYH","type":"Parent","parent":"1"}
{"_id":"pA3Kveky4TCbbuyss","type":"Child","parent":"3","child":"4"}
{"_id":"jWEcJ4hdSLvamXoxy","type":"Nested","parent":"5","embedded":{"_id":"dZcc5fZqgbpCGfPYH","type":"Parent","parent":"1"}}
{"_id":"4ZeTFSGx8LNoKoc8q","type":"Nested","parent":"7","embedded":{"_id":"pA3Kveky4TCbbuyss","type":"Parent","parent":"3"}}

In the Nested objects, in the key `embedded`, the nested objects should cast to their types.

```

Expected output:

```js

{"_id":"dZcc5fZqgbpCGfPYH","type":"Parent","parent":"1"}
{"_id":"pA3Kveky4TCbbuyss","type":"Child","parent":"3","child":"4"}
{"_id":"jWEcJ4hdSLvamXoxy","type":"Nested","parent":"5","embedded":{"_id":"dZcc5fZqgbpCGfPYH","type":"Parent","parent":"1"}}
{"_id":"4ZeTFSGx8LNoKoc8q","type":"Nested","parent":"7","embedded":{"_id":"pA3Kveky4TCbbuyss","type":"Child","parent":"3","child":"4"}}

In the Nested objects, in the key `embedded`, the nested objects should cast to their types.

```
