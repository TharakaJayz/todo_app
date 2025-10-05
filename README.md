# Todo Server - TypeScript + Express + MySQL + Sequelize

A modern backend server built with TypeScript, Express.js, MySQL, and Sequelize ORM.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- MySQL Server
- npm or yarn

### Installation

1. **Clone and install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory:

   ```env
   # Database Configuration
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=todo_app
   DB_USER=root
   DB_PASSWORD=your_password_here

   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # JWT Secret (for future authentication)
   JWT_SECRET=your_jwt_secret_here
   ```

3. **Create MySQL database:**

   ```sql
   CREATE DATABASE todo_app;
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── config/
│   ├── database.ts      # Database configuration
│   ├── sequelize.ts     # Sequelize instance
│   └── env.ts           # Environment configuration
├── models/
│   ├── Todo.ts          # Todo model
│   └── index.ts         # Models export
├── utils/
│   └── database.ts      # Database initialization
└── index.ts             # Main server file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run compiled JavaScript
- `npm run dev:build` - TypeScript compilation in watch mode

## 🗄️ Database Models

### Todo Model

- `id` - Primary key (auto-increment)
- `title` - Todo title (required)
- `description` - Optional description
- `completed` - Completion status (default: false)
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## 🔗 API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check

## 🏗️ Architecture

- **TypeScript** - Type-safe JavaScript
- **Express.js** - Web framework
- **Sequelize** - MySQL ORM
- **ESM Modules** - Modern module system
- **Environment Configuration** - Centralized config management
