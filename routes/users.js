const express = require('express');
const router = express.Router();

const userService = require('../services/userServices');


const onAuthorizedToken = require('../middlewares/onauthorizedToken');
const setREAD = require('../middlewares/setREAD');
const setREADALL = require('../middlewares/setREADALL');
const setUPDATE = require('../middlewares/setUPDATE');
const setUPDATEALL = require('../middlewares/setUPDATEALL');


router.get('/signin', async function (req, res, next) {
  req.response = await userService.createUser(req.body)
  next();
});

router.get('/', setREADALL, onAuthorizedToken, async function (req, res, next) {
  res.json('respond with a resource');
});


router.get('/mydata', setREAD, onAuthorizedToken, async function(req, res, next){
  req.response = await userService.getUserData(req.body)
  next();
})

router.post('/updatemydata', setUPDATE, onAuthorizedToken, async function(req, res, next){
  req.response = await userService.updateUserData(req.body.email)
  next();
})
router.post('/updateuser/:email', setUPDATEALL, onAuthorizedToken, async function(req, res, next){
  req.response = await userService.updateUserData(req.params.email)
  next();
})

module.exports = router;
