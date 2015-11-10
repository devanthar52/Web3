"use strict";

describe("TodoList", function() {
  it("is defined in TodoMVC.Todos namespace", function() {
    expect(TodoMVC.Todos.TodoList).toBeDefined();
  });

  it("is a collection of Todo models", function() {
    expect(new TodoMVC.Todos.TodoList().create({}) instanceof TodoMVC.Todos.Todo).toBe(true)
  });

});

describe("Backbone.localStorage", function() {

  describe("on a Collection", function() {

    var collection = new TodoMVC.Todos.TodoList();

    beforeEach(function() {
      collection.localStorage._clear();
      collection.fetch();
    });


    it("should use `localSync`", function() {
      expect(Backbone.getSyncMethod(collection)).toEqual(Backbone.localSync);
    });

    describe("instances", function() {

      it('deletes destroyed models', function() {
        expect(collection.length).toBe(0);
        var todo = collection.create({title: "i'll be gone"});
        expect(collection.length).toBe(1);
        collection.get(todo.id).destroy();
        expect(collection.length).toBe(0);
      });

      describe("save", function() {

        var model, model2;

        beforeEach(function() {
          model = collection.create({});
          model.save({
            string: "String 0"
          });
          collection.fetch()
        });

        it("should persist the changes", function() {
          expect(model.get("string")).toEqual("String 0");
        });
        it("should load from localStorage", function() {
          model = collection.create({title: "localStorage is great"});
          var collection2 = new TodoMVC.Todos.TodoList();
          expect(_.contains(collection2.pluck('title'), 'localStorage is great')).toBe(false)
          collection2.fetch();
          expect(_.contains(collection2.pluck('title'), 'localStorage is great')).toBe(true)
        });
      });
    });
  });
});
