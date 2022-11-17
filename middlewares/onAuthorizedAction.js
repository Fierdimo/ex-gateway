const axios = require('axios');

async function onAuthorizedAction(req, res, next) {
//TODO: add error handler
    const response = await axios.get(process.env.AUTH_URL_BASE+'/rol/isValidAction',
            {
                data: {
                    rolname: req.body.rolname,
                    action: req.body.action
                }
            })

    if (response.data) next();
    else res.status(403).json('Unauthorized action');

}

module.exports = onAuthorizedAction