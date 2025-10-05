import { DataTypes, Model, type Optional } from "sequelize";
import sequelize from "../config/database";

// Define the attributes interface
interface TaskAttributes {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  isCompleted: boolean;
}

// Define the creation attributes (optional fields for creation)
interface TaskCreationAttributes
  extends Optional<TaskAttributes, "id" | "createdAt"> {}

// Define the Task model class
class Task
  extends Model<TaskAttributes, TaskCreationAttributes>
  implements TaskAttributes
{
  public id!: number;
  public title!: string;
  public description!: string;
  public createdAt!: Date;
  public isCompleted!: boolean;

  // Timestamps
  public readonly updatedAt!: Date;
}

// Initialize the model
Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255],
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      // This ensures createdAt is always set by the server
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Task",
    tableName: "task",
    timestamps: true, // This will automatically manage createdAt and updatedAt
    underscored: false, // Use camelCase for column names
  }
);

export default Task;
