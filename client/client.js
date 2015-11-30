

Template.main.helpers({
  stringify: function() {
    return JSON.stringify(this.raw());
  },
  all: function () {
    return Items.find();
  }
});
