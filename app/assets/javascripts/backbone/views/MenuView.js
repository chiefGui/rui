R.Views.Menu = Backbone.View.extend({
  el: '#menu',
  events: {
    'click .register': 'register'
  },
  register: function () {
    alert('Você está tentando cadastrar.');
  }
});
