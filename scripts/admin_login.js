import {removeSignInArea} from "../Sign-in.js"

let admin_Password = "admin@acras"
let admin_Email = "admin@acras.com"


const adminLogIn = (el) => {
    el.preventDefault()
    
    let adminEmail = document.getElementById("adminEmail").value;
    let adminPassword = document.getElementById("adminPassword").value;
    
    if(adminEmail==admin_Email){
        if(adminPassword==admin_Password){
            alert("Login Successful")
            window.location.replace("./dashboard.html")
            
        }else{
            alert("Wrong Password")
        }
    }else{
        alert("Wrong Email ID")
    }
}
document.querySelector(".admin-login").addEventListener("submit",adminLogIn)

const showform = () => {
    document.querySelector(".admin-login").classList.add("show-form")
    document.querySelector(".overlay").classList.add("show-popup")
}

const removeform = () => {
    document.querySelector(".admin-login").classList.remove("show-form")
    document.querySelector(".overlay").classList.remove("show-popup")
}

document.getElementById("close").addEventListener("click",()=>{
    removeform()
    removeSignInArea();
})
document.querySelector(".overlay").addEventListener("click",()=>{
    removeform()
    removeSignInArea();
})