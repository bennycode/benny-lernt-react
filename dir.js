const tsConfig = require('./tsconfig');
const path = require('path');

const dir = {};
dir.data = path.join(__dirname, 'data');

dir.dist = path.join(__dirname, 'dist');
dir.distView = path.join(dir.dist, 'frontend');

dir.src = path.resolve(tsConfig.compilerOptions.rootDir);
dir.srcView = path.join(dir.src, 'frontend');

module.exports = dir;
