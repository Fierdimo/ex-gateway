const axios = require('axios');

async function authUser(user) {

    var res;

    try {
        const response = await axios.post(process.env.AUTH_URL_BASE + '/auth/', user);
        res = response;
    } catch (err) {
        res = err.response;
    }

    return {
        status: res.status,
        data: res.data
    }

}


module.exports = { authUser }