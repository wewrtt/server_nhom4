const userRouter = require('./user')
function routes(app) {
  app.use('/user', userRouter);
}

module.exports = routes;