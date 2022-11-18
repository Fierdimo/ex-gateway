function setCREATE_GUEST (req, res, next){
    req.body.action = "CREATE_GUEST";
    next();
}
module.exports = setCREATE_GUEST