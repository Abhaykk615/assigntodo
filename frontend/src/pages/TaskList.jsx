import React, { useState, useEffect } from 'react';
import { getAllTasks } from '../services/taskService';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch tasks from API
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getAllTasks();
      setTasks(response.data);
      setError('');
    } catch (error) {
      setError('Failed to load tasks. Please try again.');
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle task added
  const handleTaskAdded = () => {
    fetchTasks();
  };

  // Handle task updated
  const handleTaskUpdated = () => {
    fetchTasks();
  };

  // Handle task deleted
  const handleTaskDeleted = () => {
    fetchTasks();
  };

  // Filter tasks by status
  const pendingTasks = tasks.filter(task => task.status === 'Pending');
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
  const completedTasks = tasks.filter(task => task.status === 'Completed');

  return (
    <div className="task-list">
      <header className="page-header">
        <h1>Task Management</h1>
        <p>Manage your tasks efficiently</p>
      </header>

      <div className="content-container">
        <section className="add-task-section">
          <TaskForm onTaskAdded={handleTaskAdded} />
        </section>

        <section className="tasks-section">
          {error && <div className="error-message">{error}</div>}
          
          {loading ? (
            <div className="loading">Loading tasks...</div>
          ) : tasks.length === 0 ? (
            <div className="no-tasks">
              <p>No tasks found. Add your first task!</p>
            </div>
          ) : (
            <div className="tasks-container">
              {/* Pending Tasks */}
              {pendingTasks.length > 0 && (
                <div className="task-group">
                  <h2>Pending ({pendingTasks.length})</h2>
                  <div className="tasks-grid">
                    {pendingTasks.map(task => (
                      <TaskItem
                        key={task._id}
                        task={task}
                        onTaskUpdated={handleTaskUpdated}
                        onTaskDeleted={handleTaskDeleted}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* In Progress Tasks */}
              {inProgressTasks.length > 0 && (
                <div className="task-group">
                  <h2>In Progress ({inProgressTasks.length})</h2>
                  <div className="tasks-grid">
                    {inProgressTasks.map(task => (
                      <TaskItem
                        key={task._id}
                        task={task}
                        onTaskUpdated={handleTaskUpdated}
                        onTaskDeleted={handleTaskDeleted}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Completed Tasks */}
              {completedTasks.length > 0 && (
                <div className="task-group">
                  <h2>Completed ({completedTasks.length})</h2>
                  <div className="tasks-grid">
                    {completedTasks.map(task => (
                      <TaskItem
                        key={task._id}
                        task={task}
                        onTaskUpdated={handleTaskUpdated}
                        onTaskDeleted={handleTaskDeleted}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default TaskList;
