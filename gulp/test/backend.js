require('ts-node').register();

const Jasmine = require('jasmine');

// @see https://github.com/gulpjs/gulp/issues/2164#issuecomment-443540389
module.exports = (jasmineConfigFilePath, done) => {
  const jasmine = new Jasmine({projectBaseDir: process.cwd()});

  jasmine.loadConfigFile(jasmineConfigFilePath);

  jasmine.configureDefaultReporter({
    onComplete: function (passed) {
      if (passed) {
        exit(0);
      } else {
        exit(1);
      }
    },
    showColors: true,
  });

  jasmine.onComplete(done);

  jasmine.execute();
};
