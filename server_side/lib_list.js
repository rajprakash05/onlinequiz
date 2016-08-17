module.exports = {
    domain_name : "http://localhost:8080/",
    email : require('./api/send_email'),
    user_reg : require('./database/user_reg'),
    pass_reg : require('./database/pass_reg'),
    setpassword : require('./api/set_userpass')
 };
