Items = new Mongo.Collection('items');

Parent = Astro.Class({
  name: 'Parent',
  collection: Items,
  typeField: 'type',
  fields: {
    parent: 'string'
  }
});

Child = Parent.inherit({
  name: 'Child',
  fields: {
    child: 'string'
  }
});

Nested = Parent.inherit({
  name: 'Nested',
  fields: {
    embedded: {
      type: 'object',
      nested: 'Parent'
    }
  }
});