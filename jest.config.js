module.exports = {
  clearMocks: true,
  roots: ["<rootDir>/tests"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleNameMapper: { "@lilib/utils": "<rootDir>/src" },
};
