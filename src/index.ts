// src/index.ts
import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { testConnection } from "./config/database";
import sequelize from "./config/database";
import taskRoutes from "./routes/task";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/task", taskRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express Backends!");
});

// Test database connection and start server
const startServer = async () => {
  try {
    await testConnection();

    // Sync database tables
    await sequelize.sync({ force: false }); // Set to true to drop and recreate tables
    console.log("✅ Database tables synchronized successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT} 🚀`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
