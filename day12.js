const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form', (req, res) => {
    res.send(`
        <form action="/submit" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"><br><br>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"><br><br>
            <input type="submit" value="Submit">
        </form>
    `);
});
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Form submitted successfully! Name: ${name}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
