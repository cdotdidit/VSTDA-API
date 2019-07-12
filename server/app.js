const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser') 
const POST = 8484

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

let mockData = 
[
  {
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
  },
  {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
  },
  {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
  }
];

//const router = express.Router()

app.get('/', function(req, res){ //initial server startup message
  console.log(200)
  res.json('OK').status(200);
});

app.get('/api/TodoItems', function(req, res){ //sends all todo to the DOM
  res.json(mockData).status(200)
});

app.post('/api/TodoItems', function(req, res){ //posts new todo item to actual array
  mockData.push(req.body)
  res.status(201).json(req.body);
});

app.delete('/api/TodoItems/:id', function(req, res){
  res.status(200).json(mockData.splice(req.params.number, 1)[0]);
});

app.get('/api/TodoItems/:id', function(req, res){ //grab todo items by id here
  for(let i = 0; i < mockData.length; i++) { //iterates thru array
    if(mockData[i]['todoItemId'] == req.params.id) { //compares id# to the item sending thru (req.params.id)
        res.send(mockData[i]);
    }
}
});

module.exports = app;