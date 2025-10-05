// Error response formatter
export const formatErrorResponse = (
  message: string,
  statusCode: number = 400
) => {
  return {
    success: false,
    message: message,
    statusCode: statusCode,
  };
};
