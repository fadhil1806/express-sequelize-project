const jwt = require('jsonwebtoken');
const responseHelpers = require('../helpers/responseHelpers');

require('dotenv').config();
const {API_KEY} = process.env;

async function authentication(req, res, next) {
    const authHeader = req.headers.authorization;
    jwt.verify(authHeader, API_KEY, (err, decoded) => {
        if(err) return responseHelpers(res, 401,{ message: "Invalid Token, Unauthorized" });
        req.user = decoded;
        return next();
    })
}
module.exports = authentication;