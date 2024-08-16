require('dotenv').config();
const jwt = require('jsonwebtoken');
const errorTemplate = require('../Templates/errorTemplate');
const messages = require('../message/messages');

module.exports = (req, res, next)=>{

    try{
        // "Bearer: dsjgdjhkkdjwjkdwjwk6282hjdwh8"
        //This is array destructuring in javascript
        const [bearer, token] = req.headers.authorization.split(' ');

        jwt.verify(token, process.env.jwt_secret);
        next();
    }
    catch(err){
        return errorTemplate(res, err, messages.auth_failed, 500);
    }
}