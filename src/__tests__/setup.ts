// Test setup file

// Mock Sequelize for testing
jest.mock("sequelize", () => {
  const mockSequelize = {
    authenticate: jest.fn(),
    sync: jest.fn(),
  };
  return {
    Sequelize: jest.fn(() => mockSequelize),
  };
});

// Mock console methods to avoid noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
};
