const chalk = require('chalk');
const dotenv = require('dotenv');
const env = require('gulp-env');
const fs = require('fs-extra');
const gutil = require('./gulp-util');
const path = require('path');

function setupEnvironment(overrides) {
  const defaults = {
    FORCE_COLOR: 1,
    NODE_ENV: process.env.NODE_ENV,
    NTBA_FIX_319: 1,
  };

  const config = {...defaults, ...overrides};

  gutil.log(chalk`Running scripts in "{green ${config.NODE_ENV}}" mode...`);

  if (config.NODE_ENV === 'development') {
    const dotEnvFile = path.join(process.cwd(), '.env');
    let parsed = {};
    try {
      parsed = dotenv.parse(fs.readFileSync(dotEnvFile), {encoding: 'utf8'});
    } catch (error) {
      gutil.log.info(`Skipping adding values from dotenv file: ${error.message}`);
    }
    Object.assign(config, parsed);
  }

  env({vars: config});

  gutil.log(`Environment variables: ${JSON.stringify(config, null, 2)}`);

  return config;
}

module.exports = setupEnvironment;

