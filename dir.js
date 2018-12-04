const tsConfig = require('./tsconfig');
const path = require('path');

const dir = {};
dir.data = path.join(__dirname, 'data');

dir.dist = path.join(__dirname, 'dist');
dir.distView = path.join(dir.dist, 'view');

dir.src = path.resolve(tsConfig.compilerOptions.rootDir);
dir.srcView = path.join(dir.src, 'view');

module.exports = dir;
