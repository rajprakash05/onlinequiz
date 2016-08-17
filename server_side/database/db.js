var mongoDB = require('mongoose');
var UserSchema = new mongoDB.Schema({
    name: { type: String, index: true },
    email: { type: String, index: true },
    password: { type: String, index: true },
    roles: [{ name: { type: String, index: true } }],
    dob: { type: Date, index: true },
    work: { type: String, index: true },
    sex: { type: String, index: true },
    area: { type: String, index: true },
    c_area: { type: String, index: true },
    reference: { type: String, index: true },
    phone1: { type: String, index: true },
    phone2: { type: String, index: true },
    skill_set: Array,
    expertise_level: { type: Number, index: true },
    group_set: Array
});

var AdministrationSchema = new mongoDB.Schema({
    username: {type: String,index:true},
    password:{type: String,index:true}
});
module.exports.users = mongoDB.model('users', UserSchema);
module.exports.administrations = mongoDB.model('administrations', AdministrationSchema);
