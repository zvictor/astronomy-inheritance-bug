Meteor.startup(function() {
  Items.remove({});

  var parent = new Parent({parent: 1, child: 2});
  var child = new Child({parent: 3, child: 4});
  var nestedParent = new Nested({parent: 5, child: 6, embedded: parent});
  var nestedChild = new Nested({parent: 7, child: 8, embedded: child});

  _.invoke([nestedParent, nestedChild], 'save');
});
