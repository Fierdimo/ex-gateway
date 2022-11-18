function setDELETE (req, res, next){
    req.body.action = "DELETE";
    next();
}
module.exports = setDELETE