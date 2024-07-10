const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome');
});
app.get('/about/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}, I'm gonna learn this`);
});
app.get('/contact', (req, res) => {
    const username = req.query.username || '@joseph_agw';
    res.send(`Contact: ${username}`);
});
app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    const age = req.query.age;
    res.send(`Profile of ${username}. Age: ${age}`);
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
