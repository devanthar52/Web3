"use strict";

describe('Tests for TodoView', function() {

  var collection = new TodoMVC.Todos.TodoList();

  beforeEach(function() {
    collection.localStorage._clear();
    collection.fetch();
  });

  afterEach(function() {
    collection.localStorage._clear();
    collection.fetch();
  });

  describe("single todo", function() {
    it("should have an ItemView", function() {
      expect(TodoMVC.TodoList.Views.ItemView).toBeDefined();
    });

    it('should be tied to a DOM element when created, based off the property provided.', function() {
      expect(new TodoMVC.TodoList.Views.ItemView().el.tagName.toLowerCase()).toBe('li');
    });

  });

  describe("multiple todos", function() {
    it("should have a ListView", function() {
      expect(TodoMVC.TodoList.Views.ListView).toBeDefined();
    });

    it("ListView should be a CompositeView", function() {
      expect(new TodoMVC.TodoList.Views.ListView() instanceof Backbone.Marionette.CompositeView).toBe(true)
    });

    it('should be tied to a DOM element when created, based off the property provided.', function() {
      expect(new TodoMVC.TodoList.Views.ListView().el.tagName.toLowerCase()).toBe('div');
    });

    it("should call update() on 'render'", function() {
      var view = new TodoMVC.TodoList.Views.ListView()
      spyOn(view, 'update');
      view.render();
      expect( view.update ).toHaveBeenCalled()
    });

  });


  describe("UI", function() {
    it("should have a field to enter new todos", function() {
      expect($("#new-todo").length).not.toEqual(0);
      expect($("#new-todo").attr("placeholder")).toEqual("What needs to be done?");
      expect($("#new-todo").attr("autofocus")).toEqual("autofocus");
    });

    it("should display todo count", function() {
      expect($("#todo-count").text().trim()).toEqual("0 items left");

      $("#new-todo").val("123")


      var e = jQuery.Event("keypress");
      e.which = 13;
      e.keyCode = 13;
      $("#new-todo").trigger(e);

      expect($("#todo-count").text().trim()).toEqual("1 item left");

    });
  });

})
