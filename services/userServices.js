const axios = require('axios');

async function createUser(user) {
    var res;
    try {
        const response = await axios.post(process.env.AUTH_URL_BASE + '/user/create', user);
        res = response;
    } catch (err) {
        res = err.response;
    }

    return {
        status: res.status,
        data: res.data
    }
}

async function getUserData(data) {
    var res;
    try {
        const response = await axios.get(process.env.AUTH_URL_BASE + '/user/show/' + data.email)
        res = response;
    } catch (err) {
        res = err.response;
    }

    return {
        status: res.status,
        data: res.data
    }
}

async function getUserList() {
    var res;
    try {
        const response = await axios.get(process.env.AUTH_URL_BASE + '/user/list')
        res = response;
    } catch (err) {
        res = err.response;
    }

    return {
        status: res.status,
        data: res.data
    }
}

async function updateUserData(user) {
    var res;
    try {
        const response = await axios.post(process.env.AUTH_URL_BASE + '/user/update/', user)
        res = response;
    } catch (err) {
        res = err.response;
    }

    return {
        status: res.status,
        data: res.data
    }
}

async function deleteUser(user) {
    var res;
    try {
        const response = await axios.delele(process.env.AUTH_URL_BASE + '/user/' + user)
        res = response;
    } catch (err) {
        res = err.response;
    }

    return {
        status: res.status,
        data: res.data
    }
}

async function updatePassword(user) {
    var res;
    try {
        const response = await axios.post(process.env.AUTH_URL_BASE + '/user/changepassword/', user)
        res = response;
    } catch (err) {
        res = err.response;
    }

    return {
        status: res.status,
        data: res.data
    }
}

async function upgrade(user) {
    var res;
    try {
        const response = await axios.post(process.env.AUTH_URL_BASE + '/user/upgrade/' + user)
        res = response;
    } catch (err) {
        res = err.response;
    }

    return {
        status: res.status,
        data: res.data
    }
}

module.exports = { createUser, getUserData, getUserList, updateUserData, updatePassword, deleteUser, upgrade }