var app = app || {};

app.TodoList = Backbone.Collection.extend({
	model: app.Todo,
		localStorage: new Backbone.LocalStorage('local'),

		completed: function () {
			return this.where({completed: true});
		}
});
app.todos = new app.TodoList;
