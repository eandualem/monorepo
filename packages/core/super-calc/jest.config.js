const base = require('../../../jest.config.base');
const packageJson = require('./package');

console.log("jest.config.js");

module.exports = {
    ...base,
    name: packageJson.name,
    displayName: packageJson.name,
};
