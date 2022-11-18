function setUPGRADE (req, res, next){
    req.body.action = "UPGRADE";
    next();
}
module.exports = setUPGRADE