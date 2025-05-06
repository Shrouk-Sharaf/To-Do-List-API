const Tasks = require('./task.js');
const db = require('./db.js');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.findAll();
        res.json(tasks);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving tasks');
    }
});

app.post('/', async (req, res) => {
    const { Title, Description, Done, DueDate } = req.body;
    try {
        const task = await Tasks.create({ Title, Description, Done, DueDate });
        res.json(task);
    } catch (err) {
        res.status(500).send('Error creating task');
    }
});

app.patch('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { Title, Description, Done, DueDate } = req.body;
    Tasks.update({ Title, Description, Done, DueDate }, { where: { id } })
        .then(() => res.status(200).send('Task updated successfully'))
        .catch(() => res.status(500).send('Error updating task'));
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    Tasks.destroy({ where: { id } })
        .then(() => res.status(200).send('Task deleted successfully'))
        .catch(() => res.status(500).send('Error deleting task'));
});

app.listen(8000, async () => {
    await db.sync({ alter: true });
});