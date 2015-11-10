"use strict";

describe("Todo", function() {
  it("is defined in TodoMVC.Todos.Todo namespace", function() {
    expect(TodoMVC.Todos.Todo).toBeDefined();
  });

  describe("default attributes", function() {
    it("has an empty title attribute", function() {
      var todo = new TodoMVC.Todos.Todo();
      expect(todo.get('title')).toBe('');
    });
    it("has a false completed attribute", function() {
      var todo = new TodoMVC.Todos.Todo();
      expect(todo.get('completed')).toBe(false);
    });
  });

  describe("business logic", function() {
    it("toggle() inverts the 'completed' value", function() {
      var todos = new TodoMVC.Todos.TodoList();
      var todo = todos.create({});
      expect(todo.get('completed')).toBe(false);
      todo.toggle();
      expect(todo.get('completed')).toBe(true);
      todo.toggle();
      expect(todo.get('completed')).toBe(false);
    });
  });
});
