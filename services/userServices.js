const axios = require('axios');

async function createUser(user) {
    return {
        error: false,
        data: `${user.email} creado at ${Date.now()}`
    }
}

async function getUserData(data) {
    const my = await axios.get(process.env.AUTH_URL_BASE + '/user/show/' + data.email)
    return {
        error: false,
        data: my.data
    }

}

async function updateUserData(user) {
    return {
        error: false,
        data: user
    }
}

async function deleteUser() {

}

module.exports = { createUser, getUserData, updateUserData, deleteUser }