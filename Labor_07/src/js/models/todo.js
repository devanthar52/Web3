var app = app || {};
(function () {
    'use strict';

    app.Todo = Backbone.Model.extend({
					url:"localhost",
        defaults: {
            title: '',
            completed: false
        },

        toggle: function () {
/*
            if(this.completed == true) {
                this.completed = false;
            }else{
                this.completed = true;
            }
*/			
			this.set({
                completed: !this.get('completed')
            });
        }
    });

})();
