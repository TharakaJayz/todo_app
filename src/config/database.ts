import { Sequelize } from "sequelize";

// Database configuration
const sequelize = new Sequelize({
  database: "todo_app",
  username: "root",
  password: "4254",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: console.log, // Enable SQL query logging
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Test database connection
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection has been established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

export default sequelize;
