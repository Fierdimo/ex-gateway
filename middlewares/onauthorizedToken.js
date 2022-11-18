const axios = require('axios');

async function onAuthorizedToken(req, res, next) {

    try {
        const response = await axios.post(process.env.AUTH_URL_BASE + '/auth/' + req.headers.token,
            {
                action: req.body.action
            })
        if (response.data.pass) {
            req.body.email = response.data.email;
            //if (req.body.action != "UPDATEALL") req.body.rolname = response.data.rolname
            next();
        }
        else res.status(401).json(response.data.error)
    } catch (e) {
        res.status(404).json(e)
    }

}

module.exports = onAuthorizedToken