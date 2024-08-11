module.exports = {
    testTimeout: 60000,
    'transform': {
        '^.+\\.jsx?$': 'babel-jest',
      },
  testMatch: ['**/*.spec.js?(x)'],
  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report"
    }]
  ]
}
