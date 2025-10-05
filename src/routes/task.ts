import express, { type Request, type Response } from "express";
import Task from "../models/task";
import { validateTask } from "../utils/validation";
import { formatErrorResponse } from "../utils/response";

const router = express.Router();

// Get all tasks
router.get("/", async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll({
      order: [["createdAt", "DESC"]], // Order by newest first
    });

    res.status(200).json({
      message: "Tasks retrieved successfully",
      success: true,
      tasks: tasks,
      count: tasks.length,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res
      .status(500)
      .json(
        formatErrorResponse(
          "Internal server error. Failed to fetch tasks.",
          500
        )
      );
  }
});

router.post("/create", async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    // Single validation check
    const error = validateTask(title, description);
    if (error) {
      return res.status(400).json(formatErrorResponse(error, 400));
    }

    // Create task
    const task = await Task.create({
      title: title.trim(),
      description: description.trim(),
      isCompleted: false,
    });

    res.status(201).json({
      message: "Task created successfully",
      success: true,
      task: {
        id: task.id,
        title: task.title,
        description: task.description,
        isCompleted: task.isCompleted,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
      },
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res
      .status(500)
      .json(
        formatErrorResponse(
          "Internal server error. Failed to create task.",
          500
        )
      );
  }
});

// Update task completion status
router.put("/update/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { isCompleted } = req.body;

    // Simple validation for isCompleted
    if (typeof isCompleted !== "boolean") {
      return res
        .status(400)
        .json(formatErrorResponse("isCompleted must be a boolean value", 400));
    }

    // Check if task exists and update
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json(formatErrorResponse("Task not found", 404));
    }

    // Update only isCompleted field
    await task.update({ isCompleted });

    res.status(200).json({
      message: "Task updated successfully",
      success: true,
      task: {
        id: task.id,
        title: task.title,
        description: task.description,
        isCompleted: task.isCompleted,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
      },
    });
  } catch (error) {
    console.error("Error updating task:", error);
    res
      .status(500)
      .json(
        formatErrorResponse(
          "Internal server error. Failed to update task.",
          500
        )
      );
  }
});

export default router;
