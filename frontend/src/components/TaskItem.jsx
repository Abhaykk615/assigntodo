import React, { useState } from 'react';
import { updateTask, deleteTask } from '../services/taskService';

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description,
    status: task.status
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
    setError('');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({
      title: task.title,
      description: task.description,
      status: task.status
    });
    setError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!editData.title.trim()) {
      setError('Title is required');
      return;
    }

    setIsUpdating(true);
    
    try {
      await updateTask(task._id, editData);
      setIsEditing(false);
      onTaskUpdated();
    } catch (error) {
      setError('Failed to update task. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteTask(task._id);
        onTaskDeleted();
      } catch (error) {
        setError('Failed to delete task. Please try again.');
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#10b981';
      case 'In Progress':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="task-item">
      {error && <div className="error">{error}</div>}
      
      {isEditing ? (
        <form onSubmit={handleUpdate} className="edit-form">
          <div className="form-group">
            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleChange}
              maxLength="100"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="description"
              value={editData.description}
              onChange={handleChange}
              rows="2"
              maxLength="500"
            />
          </div>
          
          <div className="form-group">
            <select
              name="status"
              value={editData.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          
          <div className="edit-actions">
            <button 
              type="submit" 
              disabled={isUpdating}
              className="save-btn"
            >
              {isUpdating ? 'Saving...' : 'Save'}
            </button>
            <button 
              type="button" 
              onClick={handleCancel}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="task-content">
          <div className="task-header">
            <h3>{task.title}</h3>
            <span 
              className="status-badge"
              style={{ backgroundColor: getStatusColor(task.status) }}
            >
              {task.status}
            </span>
          </div>
          
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
          
          <div className="task-meta">
            <small>
              Created: {new Date(task.createdAt).toLocaleDateString()}
            </small>
          </div>
          
          <div className="task-actions">
            <button onClick={handleEdit} className="edit-btn">
              Edit
            </button>
            <button onClick={handleDelete} className="delete-btn">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
