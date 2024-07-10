const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Welcome ');
});

app.get('/about', (req, res) => {
    res.send('Im gonna learn this');
});

app.get('/contact', (req, res) => {
    res.send('@joseph_agw');
    
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
