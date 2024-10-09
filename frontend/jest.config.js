export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    // Mappinimas SCSS failams
    "\\.(css|less|scss)$": "identity-obj-proxy",
    // Mappinimas SVG failams
    "\\.(svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
