import LogIn from "./Auth-Component/login.js";

document.querySelector(".sign-in-area").innerHTML=LogIn();

import SignUp from "./Auth-Component/createac.js";

document.querySelector(".sign-Up-area").innerHTML=SignUp();








document.querySelector(".overlay").addEventListener("click",()=>{
    removeSignInArea();
    removeSignUpArea();
})


document.querySelector(".sign-In-click").addEventListener("click",()=>{

showSignInArea();


})

const showSignInArea=()=>{

document.querySelector(".overlay").classList.add("showOverlay");
document.querySelector(".sign-in-area").classList.add("showSignInArea");


}

document.querySelector(".sign-in-area>.cross").addEventListener("click",()=>{

    removeSignInArea();
})

const removeSignInArea=()=>{

    document.querySelector(".overlay").classList.remove("showOverlay");
    document.querySelector(".sign-in-area").classList.remove("showSignInArea");


}

//signup------------------

document.querySelector(".signuplinkbtn").addEventListener("click",()=>{


    showSignUpArea();

})

const showSignUpArea=()=>{

     document.querySelector(".overlay").classList.add("showOverlay");
     document.querySelector(".sign-Up-Area").classList.add("showSignUpArea");
    
   
    }


    document.querySelector(".cross2").addEventListener("click",()=>{

        removeSignUpArea();
        removeSignInArea();
    })
    
    const removeSignUpArea=()=>{

       
        document.querySelector(".sign-Up-Area").classList.remove("showSignUpArea");
    
    
    }