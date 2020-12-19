const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/cleanBlogDBdev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connect successfully!!!!");
    } catch (error) {
        console.log("Failed to connect!!!");
    }


}

module.exports = { connect };
