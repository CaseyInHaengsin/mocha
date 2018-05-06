var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    //check if email already exists
    //save user to te database
    db.saveUser({email, password })
    //send welcome email
}