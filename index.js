import{navbar,transitions} from "./Components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();

import footer from "./Components/footer.js"
document.getElementById("footer").innerHTML = footer();

transitions();

let footerinput=document.getElementById("footerinput").value
let footerbutton=document.getElementById("footerbutton");
footerbutton.addEventListener("click",function(){
    if(footerinput==""){
        alert("Please fill all the details")
    }else{
        alert("You are successfully signed up for J.Crew Newsletter")
    }
})

let logstatus=localStorage.getItem("loggedInstatus")
let accountt=document.getElementById("Myaccount")
let bhasad=document.getElementById("bhasad")
let logout=document.getElementById("Logout")
let signinvbtn=document.getElementById("SIGNINCLICK");
if(logstatus=="true"){
    bhasad.style.width="14%"
    accountt.innerText="My Account"
    signinvbtn.innerText=null
    signinvbtn.style.marginLeft="-30px"
    logout.innerText="Logout"
    logout.onclick  =()=>{
        Logout()
    }
    logout.style.cursor="pointer"
    accountt.style.cursor="pointer"
}

let Logout=()=>{
    console.log("akjfahkjalhfsj")
    let loggedInstatus=false;
    localStorage.setItem('loggedInstatus',JSON.stringify(loggedInstatus));
    bhasad.style.width="8%";
    accountt.innerHTML=null;
    logout.innerHTML=null;
    signinvbtn.innerText="Sign In"
}