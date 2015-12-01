Items = new Mongo.Collection('items');

Parent = Astro.Class({
  name: 'Parent',
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

Nested = Astro.Class({
  name: 'Nested',
  collection: Items,
  fields: {
    embedded: {
      type: 'object',
      nested: 'Parent'
    }
  }
});