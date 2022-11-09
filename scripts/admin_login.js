let admin_Password = "admin@acras"
let admin_Email = "admin@acras.com"

document.querySelector(".admin-login").addEventListener("submit",adminLogIn)
function adminLogIn(el){
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

const showform = () => {
    document.querySelector(".admin-login").classList.add("show-form")
    document.querySelector(".admin-popup").classList.add("show-popup")
}
showform()



const removeform = () => {
    document.querySelector(".admin-login").classList.remove("show-form")
    document.querySelector(".admin-popup").classList.remove("show-popup")
}

document.getElementById("close").addEventListener("click",removeform)
document.querySelector(".admin-popup").addEventListener("click",removeform)