function getUrlFileName(url){
    var tail =".html";
    if(!url.includes(tail)){
        return rs = url.substring(1) + tail;
    }else
        return rs = url.substring(1);
    
}


module.exports = {
    getUrlFileName: getUrlFileName,

}