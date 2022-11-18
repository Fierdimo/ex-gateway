const axios = require('axios');

async function createUser(user) {
    try {
        const response = await axios.post(process.env.AUTH_URL_BASE + '/user/create', user);
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

async function getUserData(data) {
    try {
        const response = await axios.get(process.env.AUTH_URL_BASE + '/user/show/' + data.email)
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

async function getUserList() {
    try {
        const response = await axios.get(process.env.AUTH_URL_BASE + '/user/list')
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

async function updateUserData(user) {
    try {
        const response = await axios.post(process.env.AUTH_URL_BASE + '/user/update/', user)
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

async function deleteUser(user) {
    try {
        const response = await axios.delele(process.env.AUTH_URL_BASE + '/user/' + user)
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

async function updatePassword(user) {
    try {
        const response = await axios.post(process.env.AUTH_URL_BASE + '/user/changepassword/', user)
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

async function upgrade(user) {
    try {
        const response = await axios.post(process.env.AUTH_URL_BASE + '/user/upgrade/'+ user)
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

module.exports = { createUser, getUserData, getUserList, updateUserData, updatePassword, deleteUser, upgrade }