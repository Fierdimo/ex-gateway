function setUPDATEALL (req, res, next){
    req.body.action = "UPDATEALL";
    next();
}
module.exports = setUPDATEALL