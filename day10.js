const express = require('express');
const app = express();
const port = 3000;
const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};
app.use(requestLogger);
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
app.get('/error', (req, res) => {
    throw new Error('This is a forced error.');
});
app.use(errorHandler);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
//go to youtube devs.
