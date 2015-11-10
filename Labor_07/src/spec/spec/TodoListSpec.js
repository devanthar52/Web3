describe("TodoList", function() {
  it("is defined in app namespace", function() {
    expect(app.TodoList).toBeDefined();
  });

  it("has an instance in app namespace", function() {
    expect(app.Todos).toBeDefined();
    expect(app.Todos instanceof app.TodoList).toBe(true)
  });

  it("is a collection of Todo models", function() {
    expect(new app.TodoList().create({}) instanceof app.Todo).toBe(true)
  });

  it("completed() filters completed todos", function() {
    todos = new app.TodoList();
    todos.create({title: "is completed", completed: true});
    todos.create({title: "is not completed", completed: false});
    expect(todos.length).toBe(2);
    completed_todos = todos.completed();
    expect(completed_todos.length).toBe(1);
    expect(completed_todos[0].get('title')).toBe('is completed');
  });
});

describe("Backbone.localStorage", function() {

  describe("on a Collection", function() {

    var collection = new app.TodoList();

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
        todo = collection.create({title: "i'll be gone"});
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
          var collection2 = new app.TodoList();
          expect(_.contains(collection2.pluck('title'), 'localStorage is great')).toBe(false)
          collection2.fetch();
          expect(_.contains(collection2.pluck('title'), 'localStorage is great')).toBe(true)
        });
      });
    });
  });
});
