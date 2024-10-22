const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.get('/todo', (req, res) => {
    res.render('todo', { tasks });
});

app.post('/todo', (req, res) => {
    tasks.push(req.body.task);
    res.redirect('/todo');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/delete/:index', (req, res) => {
    const index = req.params.index;
    tasks.splice(index, 1); 
    res.redirect('/todo');
});