const path = require('path');

const dir = {};
dir.data = path.join(__dirname, 'data');

dir.dist = path.join(__dirname, 'dist');
dir.distView = path.join(dir.dist, 'frontend');

dir.src = path.join(__dirname, 'src', 'main');
dir.srcView = path.join(dir.src, 'frontend');

module.exports = dir;
