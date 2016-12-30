/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

webpack(webpackConfig).run((err, stat) => {
  if (err) {  // fatal error occurred. stop here.
    console.log(chalk.red(err));
    return 1;
  }
  return 0; // success
});
