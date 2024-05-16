const { hashPassword, comparePassword } = require("../config/bcrypt");
const generateRandomId = require("../config/generateRandomID");
const generateToken = require("../config/generateToken");
const { errorResponse, successResponse, internalErrorResponse } = require("../config/responseJson");
const users = require("../models/users");
async function register(req, res) {
    const {name, username, password, email} = req.body
    try {
        const existingUsername = await users.findOne({
            where: {username: username}
        })

        const existingEmail = await users.findOne({
            where: {email: email}
        })
        if(existingUsername != null) errorResponse(res, 'Username already exits')
        if(existingEmail != null) errorResponse(res, 'Email already exits')

        const idUser = await generateRandomId(10, Number);
        const hashedPassword = await hashPassword(password);

        await users.create({
            id: idUser,
            name,
            username,
            password: hashedPassword,
            email
        })
        successResponse(res, 'Register successfully')
    
    }
    catch(error) {
        console.log(error);
        internalErrorResponse(res, error)
    }
}

module.exports = {register}