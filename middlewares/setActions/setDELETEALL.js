function setDELETEALL (req, res, next){
    req.body.action = "DELETEALL";
    next();
}
module.exports = setDELETEALL