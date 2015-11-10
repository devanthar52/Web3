describe('About Backbone.View', function() {
    var todoView;
// what html element tag name represents this view?
    beforeEach(function() {
        $('body').append('<ul id="todoList"></ul>');
        todoView = new TodoView({ model: new Todo({ text: 'Stop monkeys from throwing their own crap!' }) });
    });

    afterEach(function() {
        todoView.remove();
        $('#todoList').remove();
    });

    it('Should be tied to a DOM element when created, based off the property provided.', function() {
        expect(todoView.el.tagName.toLowerCase()).toBe('li');
    });

    it('Is backed by a model instance, which provides the data.', function() {
        expect(todoView.model).toBeDefined();
        expect(todoView.model.get('done')).toBe(false);
    });
});
