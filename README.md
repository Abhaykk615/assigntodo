# Task Management Web Application

A simple, clean, and efficient task management application built with React, Node.js, Express, and MongoDB. This project demonstrates fundamental full-stack development concepts with a focus on clarity and best practices.

## 🎯 Project Overview

This Task Management application allows users to:
- Create new tasks with title, description, and status
- View all tasks organized by status (Pending, In Progress, Completed)
- Update existing tasks inline
- Delete tasks with confirmation
- Experience responsive design across devices

## 🛠 Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - User interface library
- **Vite** - Build tool and development server
- **Vanilla CSS** - Styling (no external CSS frameworks)
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
task-manager/
├── backend/
│   ├── models/
│   │   └── Task.js              # MongoDB Task model
│   ├── controllers/
│   │   └── taskController.js    # Business logic for tasks
│   ├── routes/
│   │   └── taskRoutes.js        # API routes
│   ├── server.js                # Express server setup
│   ├── package.json             # Backend dependencies
│   └── .env.example             # Environment variables template
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx     # Add task form component
│   │   │   └── TaskItem.jsx     # Individual task component
│   │   ├── pages/
│   │   │   └── TaskList.jsx     # Main task list page
│   │   ├── services/
│   │   │   └── taskService.js   # API service layer
│   │   ├── App.jsx              # Main App component
│   │   ├── App.css              # Global styles
│   │   └── main.jsx             # React entry point
│   ├── index.html               # HTML template
│   ├── package.json             # Frontend dependencies
│   └── vite.config.js           # Vite configuration
└── README.md                    # This file
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your MongoDB connection string:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   ```
   
   For MongoDB Atlas, use:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager
   ```

4. **Start the backend server:**
   ```bash
   npm run dev
   ```
   
   Backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   Frontend will run on `http://localhost:3000`

## 📡 API Endpoints

### Tasks API
- **GET /api/tasks** - Get all tasks
- **POST /api/tasks** - Create a new task
- **PUT /api/tasks/:id** - Update a task
- **DELETE /api/tasks/:id** - Delete a task

### Health Check
- **GET /api/health** - Server health status

### Request/Response Examples

#### Create Task
```javascript
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "status": "In Progress"
}
```

#### Response
```javascript
{
  "success": true,
  "data": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API docs",
    "status": "In Progress",
    "createdAt": "2023-09-01T10:30:00.000Z",
    "updatedAt": "2023-09-01T10:30:00.000Z",
    "__v": 0
  }
}
```

## 🎨 Features

### Core Functionality
- ✅ **Create Tasks**: Add new tasks with title, description, and status
- ✅ **Read Tasks**: View all tasks organized by status categories
- ✅ **Update Tasks**: Edit task details inline with save/cancel options
- ✅ **Delete Tasks**: Remove tasks with confirmation dialog
- ✅ **Status Management**: Track task progress (Pending, In Progress, Completed)

### User Experience
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🎯 **Intuitive Interface**: Clean, minimal design with clear visual hierarchy
- ⚡ **Real-time Updates**: Immediate UI updates after CRUD operations
- 🔔 **Error Handling**: User-friendly error messages and loading states
- ♿ **Accessibility**: Semantic HTML and keyboard navigation support

## 🔧 Development Notes

### Assumptions Made
1. **No Authentication**: Simplified for intern-level demonstration
2. **Single User**: Tasks are shared across all users (no user isolation)
3. **Local Development**: Optimized for development environment
4. **Basic Validation**: Essential field validation without complex rules
5. **No Pagination**: All tasks loaded at once (suitable for demo purposes)

### Code Quality Features
- **Clean Architecture**: MVC pattern with clear separation of concerns
- **Error Handling**: Comprehensive error handling at all levels
- **Input Validation**: Client and server-side validation
- **Meaningful Names**: Descriptive variable and function names
- **Comments**: Key logic explained with inline comments
- **Responsive Design**: Mobile-first CSS approach

### Performance Considerations
- **Efficient Queries**: MongoDB queries optimized for common operations
- **Component Optimization**: React components structured for reusability
- **CSS Organization**: Scoped styles with consistent naming conventions
- **API Design**: RESTful endpoints with proper HTTP status codes

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running locally
   - Check connection string in `.env` file
   - Verify network connectivity for MongoDB Atlas

2. **CORS Issues**
   - Backend runs on port 5000, frontend on 3000
   - CORS is configured in backend server

3. **Port Conflicts**
   - Change ports in `.env` (backend) and `vite.config.js` (frontend)
   - Ensure ports are not in use by other applications

4. **Dependency Issues**
   - Run `npm install` in both backend and frontend directories
   - Clear node_modules and reinstall if needed

### Development Tips
- Use browser DevTools to inspect API calls
- Check console for error messages
- Verify MongoDB data using MongoDB Compass or CLI
- Test API endpoints with Postman or curl

## 📚 Learning Outcomes

This project demonstrates:
- **Full-Stack Development**: End-to-end application development
- **REST API Design**: Proper API architecture and HTTP methods
- **Database Integration**: MongoDB with Mongoose ODM
- **React Fundamentals**: Components, state management, hooks
- **Modern JavaScript**: ES6+ features and async/await
- **Responsive Design**: CSS Grid, Flexbox, and media queries
- **Error Handling**: Graceful error management
- **Code Organization**: Clean, maintainable code structure

## 🚀 Future Enhancements

Potential improvements for learning purposes:
- User authentication and authorization
- Task search and filtering
- Task categories and tags
- Drag-and-drop task reordering
- Task due dates and reminders
- Data export functionality
- Unit and integration tests
- Docker containerization

## 📄 License

This project is licensed under the MIT License - feel free to use it for learning and development purposes.

---

**Built with ❤️ for learning full-stack development fundamentals**
#   a s s i g n t o d o  
 