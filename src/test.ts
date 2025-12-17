// This file is required by Karma to load all tests
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().forEach(context);
