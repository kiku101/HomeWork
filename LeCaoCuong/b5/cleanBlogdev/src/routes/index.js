const siteRouter = require('./site');
const postRouter = require('./post');

function route(app){
    app.use('/',siteRouter);

    app.use('/posts',postRouter);

}

module.exports = route;