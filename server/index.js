const express = require('express');
const path = require('path');
const users = require ('./controllers/users');

const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(espress.urlencoded({ extended: false}));
app.use(express.json());
app.use(expresss.static(path.join(__dirname, "../NoFramwork")));
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);


app.listen(port, () => console.log(`Example app http://localhost:${port}!`));