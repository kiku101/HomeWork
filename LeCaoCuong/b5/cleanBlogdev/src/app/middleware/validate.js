const BlogPost = require('../models/BlogPost');

function validator(req,res,next){
    if(req.body.titile != "" && req.body.body != ""){
         next();
    }else{
        res.redirect("new");
    }
    //res.send(req.body.title);

}

module.exports = validator;