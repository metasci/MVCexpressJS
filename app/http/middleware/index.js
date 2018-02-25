const root = require('app-root-path');
const Builder = require(root + '/libs/filetree/builder');

const builder = new Builder(__filename);
module.exports = builder.build(__dirname);