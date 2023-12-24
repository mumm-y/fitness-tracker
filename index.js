function login(){
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
   
    // localStorage.setItem("username",username)
    // localStorage.setItem("password",password)

    if(username=="rakesh" && password=="rakesh@2004"){
        alert("login successfull")
    }
    else{
        alert("incorrect username or password")
    }
}
