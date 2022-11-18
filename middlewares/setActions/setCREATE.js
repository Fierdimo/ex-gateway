function setCREATE (req, res, next){
    req.body.action = "CREATE";
    next();
}
module.exports = setCREATE