function setREAD (req, res, next){
    req.body.action = "READ";
    next();
}
module.exports = setREAD