function loginAdmin(){
    let username = document.getElementById("inputUserName").value;
    let password = document.getElementById("inputPassword").value;

    if(username == "1" && password == "2"){
        window.location.href = "admin-post2.html";
    }else{
        alert("Invalid username or password");
    }
}