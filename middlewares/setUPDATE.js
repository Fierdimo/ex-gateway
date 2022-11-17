function setUPDATE (req, res, next){
    req.body.action = "UPDATE";
    next();
}
module.exports = setUPDATE