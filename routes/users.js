const express = require('express');
const router = express.Router();

const userService = require('../services/userServices');

const onAuthorizedToken = require('../middlewares/onauthorizedToken');
const setCREATE = require('../middlewares/setActions/setCREATE');
const setCREATEGUEST = require('../middlewares/setActions/setCREATEGUEST');
const setDELETE = require('../middlewares/setActions/setDELETE');
const setDELETEALL = require('../middlewares/setActions/setDELETEALL');
const setREAD = require('../middlewares/setActions/setREAD');
const setREADALL = require('../middlewares/setActions/setREADALL');
const setUPDATE = require('../middlewares/setActions/setUPDATE');
const setUPDATEALL = require('../middlewares/setActions/setUPDATEALL');
const setUPGRADE = require('../middlewares/setActions/setUPGRADE');

//Sign in 
router.post('/signin', setCREATE, async function (req, res, next) {
  //TODO: crear autenticación por correo
  req.response = await userService.createUser(req.body)
  next();
});

//Read data of own user
router.get('/readmydata', setREAD, onAuthorizedToken, async function(req, res, next){
  req.response = await userService.getUserData(req.body)
  next();
})

//list all users
router.get('/', setREADALL, onAuthorizedToken, async function (req, res, next) {
  req.response = await userService.getUserList()
  next();
});

//show a single user 
router.get('/readuser/:email', setREADALL, onAuthorizedToken, async function(req, res, next){
  req.response = await userService.getUserData(req.params)
  next();
})

//update user data
router.put('/updatemydata', setUPDATE, onAuthorizedToken, async function(req, res, next){
  req.response = await userService.updateUserData(req.body)
  next();
})

//update data of a user
router.put('/updateuser/:email', setUPDATEALL, onAuthorizedToken, async function(req, res, next){
  req.body.email = req.params.email
  req.response = await userService.updateUserData(req.body)
  next();
})

//delete own user
router.delete('/deletemydata', setDELETE, onAuthorizedToken, async function (req, res, next) {
  req.response = await userService.updateUserData(req.body);
  next();
});

//delete a user
router.delete('/deleteuser/:email', setDELETEALL, onAuthorizedToken, async function (req, res, next) {
  req.response = await userService.updateUserData(req.params.email);
  next();
});

//update password
router.put('/updatemypassword', setUPDATE, onAuthorizedToken, async function(req, res, next){
  req.response = await userService.updatePassword(req.body)
  next();
})

router.put('/updatepassword/:email', setUPDATE, onAuthorizedToken, async function(req, res, next){
  req.body.email = req.params.email
  req.response = await userService.updatePassword(req.body)
  next();
});

//update rol
router.put('/upgrade', setUPGRADE, onAuthorizedToken, async function(req, res, next){
  req.response = await userService.upgrade(req.body)
  next();
});

//DOING ==============================================================================================



// TODO: =============================================================================================

router.post('/create_guest', setCREATEGUEST, onAuthorizedToken, async function (req, res, next) {
  res.json('Seguimos trabaando como empresa');
});


module.exports = router;
