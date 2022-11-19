async function handleResponse(req, res, next) {
    let status = 400;
    let data = { message: "Gateway error" }
    if (req.response) {
        if (typeof (req.response.data) == 'object')
            if ("password" in req.response.data) req.response.data.password = "*********";

        status = req.response.status
        data = req.response.data
    }

    res.status(status).json(data);
    next();
}

module.exports = handleResponse