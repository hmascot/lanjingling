function setCookie() {
    var user = $("#iPhone").val();
    var pwd = $("#login-password").val();
    $.cookie("users",user,{expires:7,path:"/"});
    $.cookie("password",$.base64.encode(pwd),{expires:7,path:"/"})
}
function getCookie() {
    var user = $.cookie("users");
    var pwd = $.cookie("password");
    if($("#chkSave").is(":checked")){
        $("#iPhone").val(user);
        $("#login-password").val(pwd)
    }
}
// function btn() {
//     // alert($("#saveCheck").is(":checked"))
//     if($("#chkSave").is(":checked")) {
//         setCookie()
//     }
// }
$("#btn").click(function(){
    if($("#chkSave").is(":checked")) {
        setCookie()
    }
})