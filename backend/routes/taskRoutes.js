const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// GET /tasks - Get all tasks
router.get('/', getAllTasks);

// POST /tasks - Create a new task
router.post('/', createTask);

// PUT /tasks/:id - Update a task
router.put('/:id', updateTask);

// DELETE /tasks/:id - Delete a task
router.delete('/:id', deleteTask);

module.exports = router;
