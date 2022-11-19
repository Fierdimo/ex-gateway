const express = require('express');
const router = express.Router();

const authService = require('../services/authenticationServices');

router.post('/', async function(req, res, next){
    req.response = await authService.authUser(req.body);
    next();
})

module.exports = router