# To-Do List API with Node.js & Sequelize

## 📌 Overview
A RESTful API for managing tasks, built with Node.js, Express, and Sequelize ORM with MySQL database support. This project demonstrates basic CRUD operations and database modeling.

## 🗂 Project Structure

```
To-Do-List-API/
├── server.js            # Main Express application
├── db.js               # Database configuration
├── task.js             # Task model definition
├── package.json        # Project dependencies
├── package-lock.json
└── README.md           # This documentation
```

## ✨ Features

- RESTful endpoints for task management
- MySQL database integration via Sequelize ORM
- Full CRUD operations:
  - Create new tasks
  - Retrieve task lists
  - Update task status
  - Delete tasks
- Model validation and error handling

## 🛠️ Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/Shrouk-Sharaf/To-Do-List-API.git
cd To-Do-List-API
```

2. Install dependencies:
```bash
npm install
```

3. Configure your MySQL database in `db.js`:
```javascript
const db = new Sequelize("to_do_list", "root", "yourpassword", {
  host: "localhost",
  dialect: "mysql"
});
```

4. Start the server:
```bash
node server.js
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | Get all tasks |
| POST   | /        | Create new task |
| GET    | /:id     | Get single task |
| PUT    | /:id     | Update task |
| DELETE | /:id     | Delete task |

## 📝 Example Requests

**Create a task:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "Title": "Complete project",
  "Description": "Finish the API documentation",
  "DueDate": "2023-12-31"
}' http://localhost:3000/
```

**Get all tasks:**
```bash
curl http://localhost:3000/
```

## 🧠 Data Model

```javascript
Task = {
  id: Integer (auto-increment),
  Title: String (required),
  Description: String (required),
  Done: Boolean (default: false),
  DueDate: Date (optional)
}
```

*Maintained by [Shrouk-Sharaf](https://github.com/Shrouk-Sharaf)*  
