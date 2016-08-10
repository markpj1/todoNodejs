var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function (req, res) {
        //seed data 
        var starterTodo = [
         {
             username: 'test',
             todo: 'Buy Milk',
             isDone: false,
             hasAttachment: false
         },
         {
             username: 'test',
             todo: 'Sell Milk',
             isDone: false,
             hasAttachment: false
         },
         {
             username: 'test',
             todo: 'feed Dog',
             isDone: false,
             hasAttachment: false
         },
         {
             username: 'test',
             todo: 'Learn node',
             isDone: false,
             hasAttachment: false
         }

        ];

        Todos.create(starterTodo, function (err, results) {
            res.send(results);
        });
    })
}