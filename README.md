# Full Stack JavaScript Starter

Setup for a Full Stack JavaScript build pipeline that helps you developing a frontend together with a backend and a database. Including automatic code recompilation and production deployment.

## Highlights
- Compatible with macOS, Linux & Windows ([cross-env][13])
- Static type-checking ([TypeScript][1])
- Latest ECMAScript features ([TypeScript][1])
- Automated development tasks ([gulp][2])
- Automated environment handling for development & production ([gulp][2], [dotenv][3])
- Incremental compilation for faster builds ([gulp-typescript][4])
- Sourcemap support ([gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps))
- Single interface log system with multiple transports ([logdown][5])
- Automatic code change detection in development ([gulp.watch][6], [nodemon][7], [webpack-dev-server][8])
- Behavior-driven development framework for testing ([jasmine][9])
- High-level abstraction for testing HTTP calls ([supertest][10])
- Server restarts in development mode when backend code changes ([nodemon][7])
- Full page reloads in development mode when backend code changes that affects the frontend ([devServer.contentBase][11])
- Incremental page reloads in development mode when frontend code changes ([HMR][12])

[1]: https://www.typescriptlang.org/
[2]: https://gulpjs.com/
[3]: https://github.com/motdotla/dotenv
[4]: https://github.com/ivogabe/gulp-typescript
[5]: https://github.com/caiogondim/logdown.js
[6]: https://gulpjs.com/docs/en/api/watch
[7]: https://nodemon.io/
[8]: https://github.com/webpack/webpack-dev-server
[9]: https://jasmine.github.io/
[10]: https://github.com/visionmedia/supertest
[11]: https://webpack.js.org/configuration/dev-server/#devserver-contentbase
[12]: https://webpack.js.org/concepts/hot-module-replacement/
[13]: https://github.com/kentcdodds/cross-env
