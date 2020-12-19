
const { render } = require('ejs');
const BlogPost = require('../models/BlogPost');

class SiteController{

    //[GET] / 
    index(req,res){
        BlogPost.find({},(err,posts) =>{
            res.render('index',{
                blogposts: posts
            });
        })
    }

    //[GET] / 
    about(req,res,next){
        res.render('about');
    }

    //[GET] / 
    contact(req,res,next){
        res.render('contact');
    }

}

module.exports = new SiteController;