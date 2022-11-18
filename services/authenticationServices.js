const axios = require('axios');

async function authUser(user){

    try {
       const response = await axios.post(process.env.AUTH_URL_BASE + '/auth/', user);
        return {
            error: false,
            data: response.data
        }
    } catch (err) {
        return {
            error: true,
            data: err.message
        }
    }

}

module.exports = {authUser}