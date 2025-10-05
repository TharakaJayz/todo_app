// Single validation function for task creation
export const validateTask = (title: any, description: any): string | null => {
  // Title validation
  if (!title || typeof title !== "string" || title.trim().length === 0) {
    return "Title is required and must be a non-empty string";
  }

  if (title.trim().length > 255) {
    return "Title must be 255 characters or less";
  }

  // Description validation
  if (description && typeof description !== "string") {
    return "Description must be a string";
  }

  return null; // No error
};
