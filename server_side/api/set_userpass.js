var lib = require('../lib_list')

module.exports.html = function(email,id){

return  `
<html>
<head>
</head>
<body>
    <h1 align=center>Set Password</h1>
    <h3 align=center>`+email+`</h3>
<div align="center">
<div align="center" id="rcorners2">
    <form action="`+lib.domain_name+`set_userpass/`+email+`/`+id+`" onsubmit="return myfunc()" method="post">
        
        <span class=pd>Password:</span><input name=password class=pd type="password" id="pass1">
        <span class=pd>Repeat Password:</span><input class=pd type="password" id="pass2">
        <input class=pd type="submit" value="Submit">
    </form>
</div>
</div>
<script>
function myfunc() {
var pass1 = document.getElementById("pass1").value;
var pass2 = document.getElementById("pass2").value;
var ok = true;
if (pass1 != pass2) {
//alert("Passwords Do not match");
document.getElementById("pass1").style.borderColor = "#E34234";
document.getElementById("pass2").style.borderColor = "#E34234";
ok = false;
}
else {
//alert("Passwords Match!!!");
}
return ok;
}
</script>
<style>
#rcorners2 {
    align: center;
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px; 
    width: 200px;
    height: 150px; 
}
.pd {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
}
</style>

</body>
</html>
`;

};
