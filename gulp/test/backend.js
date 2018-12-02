require('ts-node').register();

const Jasmine = require('jasmine');

// TODO: This function is still under construction!
// @see https://github.com/svi3c/jasmine-ts/blob/v0.0.3/index.js
module.exports = (jasmineConfigFilePath) => {
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

  jasmine.execute();
};
