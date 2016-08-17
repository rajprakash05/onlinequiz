var db = require('../database/db');

var Converter = require('csvtojson').Converter;
var converter = new Converter({});


module.exports.store = function(data){

    var user = new db.users({
        name: data.Name,
        password: ''+data.Password,
        email: data.Email.toLowerCase(),
        roles: null,
        dob: data.Dob,
        sex: data.Sex,
        work: data.Work,
        area: data.Area,
        c_area: data.C_Area,
        reference: data.Reference,
        skill_set: data.Skill.split(';')
    });
    console.log('Before Storing Data: ' + user);
    user.save(function (err, userObj) {
        if (err) {
            console.log('Error in Saving Data: ' + err);
        }
        else {
            console.log('Saved Successfully: ' + userObj);

            db.users.findByIdAndUpdate(userObj._id,{$set:{password: userObj._id}},function(err,data){
            if (err) { console.log(err);}
           else{  }
            });

            require('../lib_list').email.sendemail(userObj.name,userObj.email,require('../lib_list').domain_name+'new_userpass/'+userObj.email+'/'+userObj._id);
        }
    });
    
    
    //return null;

};
