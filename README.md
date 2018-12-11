# Full Stack TypeScript Build System

Setup for a full stack TypeScript build pipeline that helps you developing a frontend together with a backend and a database. Including automatic code recompilation and production deployment.

## Highlights
1. Compatible with macOS, Linux & Windows ([cross-env][13])
1. Static type-checking ([TypeScript][1])
1. Latest ECMAScript features ([Babel][16])
1. Automated development tasks ([gulp][2])
1. Automated environment handling for development & production ([gulp][2], [dotenv][3])
1. Incremental compilation for faster builds ([gulp-typescript][4])
1. Source map support ([gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps))
1. Single interface log system with multiple transports ([logdown][5])
1. Automatic code change detection in development ([gulp.watch][6], [nodemon][7], [webpack-dev-server][8])
1. Behavior-driven development framework for testing ([jasmine][9])
1. High-level abstraction for testing HTTP calls ([supertest][10])
1. Server restarts in development mode when backend code changes ([nodemon][7])
1. Full page reloads in development mode when backend code changes that affects the frontend ([devServer.contentBase][11])
1. Incremental page reloads in development mode when frontend code changes ([HMR][12])
1. Consistent coding styles between different editors ([EditorConfig](https://editorconfig.org/))
1. Support for Continuous Integration ([Travis CI][15])
1. Browsable API documentation generator ([hapi-swagger][17])
1. Object-relational mapping ([TypeORM][18])
1. Database migrations generation ([TypeORM][18])
1. Frontend styling solution supporting theme nesting, dynamic styles, self-support, etc. ([JSS][19])

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
[14]: https://editorconfig.org/
[15]: https://travis-ci.org/
[16]: https://babeljs.io/
[17]: https://github.com/glennjones/hapi-swagger
[18]: http://typeorm.io/
[19]: https://cssinjs.org/
