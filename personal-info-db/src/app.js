const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index');
const Person = require('./models/person');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/persons', async (req, res) => {
    const { name, age, email } = req.body;
    const person = new Person(name, age, email);
    await person.save();
    res.status(201).send(person);
});

app.get('/persons', async (req, res) => {
    const persons = await Person.findAll();
    res.status(200).send(persons);
});

app.get('/persons/:id', async (req, res) => {
    const person = await Person.findById(req.params.id);
    if (!person) {
        return res.status(404).send();
    }
    res.status(200).send(person);
});

app.put('/persons/:id', async (req, res) => {
    const updates = req.body;
    const person = await Person.update(req.params.id, updates);
    if (!person) {
        return res.status(404).send();
    }
    res.status(200).send(person);
});

app.delete('/persons/:id', async (req, res) => {
    const person = await Person.delete(req.params.id);
    if (!person) {
        return res.status(404).send();
    }
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});