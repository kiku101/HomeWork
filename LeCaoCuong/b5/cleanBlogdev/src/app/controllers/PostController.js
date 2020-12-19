const BlogPost = require('../models/BlogPost');

class PostController{
    
    //[GET] / Post/:id
    show(req,res){
        BlogPost.findById(req.params.id, (error, detailPost) =>{
            res.render('post', {
                detailPost
            })
        })
    };

    //[GET] / Post/new
    createPost(req,res){
        res.render('create');
    };

    //[POST] /post/store
    store(req,res){
        BlogPost.create(req.body, (error,blogpost)=>{
            res.redirect('/');
        })
    };

    //[DELETE] posts/delete/:id
    delete(req,res,next){
        BlogPost.findOneAndRemove({ _id: req.params.id },(error=>{
            res.redirect('/');
        }))

    }

}

module.exports = new PostController;