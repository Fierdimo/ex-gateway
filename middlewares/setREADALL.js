function setREADALL (req, res, next){
    req.body.action = "READALL";
    next();
}
module.exports = setREADALL