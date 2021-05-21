const base = require('../../../jest.config.base');
const packageJson = require('./package');

console.log(base);
console.log(packageJson);

module.exports = {
    ...base,
    name: packageJson.name,
    displayName: packageJson.name,
};
