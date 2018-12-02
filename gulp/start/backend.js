const nodemon = require('gulp-nodemon');
const {spawn} = require('child_process');

module.exports = (nodemonConfig, done) => {
  const overrides = {
    done
  };
  const config = {...nodemonConfig, overrides};

  if (process.env.NODE_ENV === 'development') {
    nodemon(config);
  } else {
    const child = spawn('node', [nodemonConfig.script], {shell: true, stdio: 'inherit'});
    child.on('exit', done);
  }
};
