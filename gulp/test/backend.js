require('ts-node').register();

const Jasmine = require('jasmine');

module.exports = (jasmineConfigFilePath, done) => {
  const jasmine = new Jasmine({projectBaseDir: process.cwd()});

  jasmine.loadConfigFile(jasmineConfigFilePath);

  // @see https://github.com/gulpjs/gulp/issues/2164#issuecomment-443540389
  jasmine.configureDefaultReporter({
    onComplete: passed => {
      if (passed) {
        exit(0);
      } else {
        exit(1);
      }
    },
    showColors: true,
  });

  jasmine.onComplete(passed => {
    if (passed) {
      done();
    } else {
      process.exit(-1);
    }
  });

  jasmine.execute();
};
