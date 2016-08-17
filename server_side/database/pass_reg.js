var db = require('../database/db');

module.exports.store = function(id,pass){
    
    db.users.findByIdAndUpdate(id,{$set:{password:pass}},function(err,data){
        if (err) { console.log(err);}
        else{ console.log("Password has been Updated..."+data); }
    });
  //  return "Password has been updated...";
};