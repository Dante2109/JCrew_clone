//Import===================================================================================================

import LogIn from "./Auth-Component/login.js";

document.querySelector(".sign-in-area").innerHTML=LogIn();

import SignUp from "./Auth-Component/createac.js";

document.querySelector(".sign-Up-Area").innerHTML=SignUp();




//pop up====================================================================================================
//pop signIn
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

//pop signup====================================================================================================

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

 //calling back sign In from sign Up with pop up=======================================================================================
 document.querySelector(".signuplinkbtn2").addEventListener("click",()=>{

    removeSignUpArea();
    removeSignInArea();
    setTimeout(showSignInArea,700);  
    

 })

    //SHOW PASSWORD AND HIDE PASSWORD========================================================================
    let countLogIn=1;
    let countSignUp=1;
    document.querySelector(".eye").addEventListener("click",()=>{
      showLogInPassword();

    });
    
    document.querySelector(".eye2").addEventListener("click",()=>{
        showSignUpPassword();
  
      });


    const showLogInPassword = ()=>{
    if(countLogIn%2===0)
      {
        document.querySelector(".eye").src="https://img.icons8.com/ios/512/visible--v1.png";
        document.querySelector(".logpasswordShow").type="password";
        countLogIn++;
      }
    else{

        document.querySelector(".eye").src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-eye-devices-flatart-icons-outline-flatarticons.png";
        document.querySelector(".logpasswordShow").type="text";
        countLogIn++;
    }
    }

    const showSignUpPassword=()=>{
    if(countSignUp%2===0)
     {
        document.querySelector(".eye2").src="https://img.icons8.com/ios/512/visible--v1.png";
        document.querySelector(".showSignupPass").type="password";
        countSignUp++;
     }
     else{

        document.querySelector(".eye2").src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-eye-devices-flatart-icons-outline-flatarticons.png";
        document.querySelector(".showSignupPass").type="text";
       countSignUp++; 
    }

    }
    //Remember Me============================================================================================
    //cookie-Super global variable-----------------------
    //LogIn Cookie===========================================================================================
    let logInCookieCount=1;
    document.querySelector("#check").addEventListener("click",()=>{

      ToRememberMeSetCokkieLogIn(); 
    })
    const ToRememberMeSetCokkieLogIn = ()=>{
      if(logInCookieCount%2!==0){
       let email= document.querySelector(".emailLogIn").value;
       let password=document.querySelector(".logpasswordShow").value;
       if(email!="" && password!=""){
         document.cookie=`myemail=${email};path=http://127.0.0.1:5500/enormous-step-3337/home.html`;
         document.cookie=`mypassword=${password};path=http://127.0.0.1:5500/enormous-step-3337/home.html`;
         document.querySelector("#check").value="true";
       }
       else{
        logInCookieCount++;
        document.querySelector("#check").value="false";
       }
    }
    
    }

    
   
 

   var getCookie=(cName)=> {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie); //to be careful
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
          if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        if(res!==undefined)
        {
            return res;
        }
        else{
            return false;
        }
      }


      const getCookieData=()=>{
        if(getCookie("myemail")!==false && getCookie("mypassword")!==false) 
        {
         document.querySelector(".emailLogIn").value=getCookie("myemail");
         document.querySelector(".logpasswordShow").value=getCookie("mypassword");
        }
        
    }
 
    getCookieData();



//Sign Up Cookie save========================================================================================

let SignUpCookieCount=1;
    document.querySelector("#check2").addEventListener("click",()=>{

      ToRememberMeSetCokkieSignUp(); 
     })
     const ToRememberMeSetCokkieSignUp = ()=>{
       if(SignUpCookieCount%2!==0){
        let email= document.querySelector(".signupemail").value;
        // console.log(email);
        let password=document.querySelector(".showSignupPass").value;
        // console.log(password);
      
        if(email!="" && password!=""){
         document.cookie=`myemail=${email};path=http://127.0.0.1:5500/enormous-step-3337/home.html`;
         document.cookie=`mypassword=${password};path=http://127.0.0.1:5500/enormous-step-3337/home.html`;
         document.querySelector("#check2").value="true";
        }
        SignUpCookieCount++;
     }
     else if(SignUpCookieCount%2==0){
        SignUpCookieCount++;
        document.querySelector("#check2").value="false";
     }
     }

 ///////////////////////////////////////////////////////////////////////



     //Autehntication==========================================================================================

document.querySelector(".showSignupPass").addEventListener("click",()=>{
    displayTestCase();
})

const displayTestCase= ()=>{
document.querySelector(".sign-Up-Area").classList.add("sign-Up-Area-height-extend");
document.querySelector(".selectcountryLabel").classList.add("selectcountryLabel2");
document.querySelector(".test_cases_password").classList.add("test_cases_password2");

}




// PassWord Validation display/////////////////////////////////////////////////////////////////////////////////////////////////
 document.querySelector(".showSignupPass").addEventListener("input",()=>{ passwordValidate(); });


let passwordValidate=()=>{
let password = document.querySelector(".showSignupPass").value;
 if(password.length>=8 && password.length<=20)
 {
        // document.querySelector("#length").before("content:\2713")
        document.querySelector("#length").innerHTML="<span class='tc1'>&#10003;</span> Between 8 and 20 characters";
        document.querySelector(".tc1").style.color="teal";
 }
  if(password.length<8)
{
    document.querySelector("#length").innerHTML="<span class='tc1'>&#9747;</span>Between 8 and 20 characters" ;
    document.querySelector(".tc1").style.color="red";
}    


    if(numberFound(password))

    {
        document.querySelector("#number").innerHTML="<span class='tc2'>&#10003;</span> At least one number" ;
        document.querySelector(".tc2").style.color="teal";
    }
if(numberFound(password)===false)
{
    document.querySelector("#number").innerHTML="<span class='tc2'>&#9747;</span>At least one number" ;
    document.querySelector(".tc2").style.color="red";
}
    


if(capitalCheck(password))
{
    document.querySelector("#captial_and_lower").innerHTML="<span class='tc3'>&#10003;</span>Contains a capital & lowercase letter";
    document.querySelector(".tc3").style.color="teal";
}
if(capitalCheck(password)===false)
{
    document.querySelector("#captial_and_lower").innerHTML="<span class='tc3'>&#9747;</span>Contains a capital & lowercase letter";
    document.querySelector(".tc3").style.color="red";
}



if(password.length!==0 && charCheckRes(password))
{
    document.querySelector("#restrictions").innerHTML="<span class='tc4'>&#9747;</span>Cannot contain < > &";
    document.querySelector(".tc4").style.color="red";
}
if(charCheckRes(password)===false)
{
    document.querySelector("#restrictions").innerHTML="<span class='tc4'>&#10003;</span>Cannot contain < > &";
    document.querySelector(".tc4").style.color="teal";
}
if(password.length==0){
    document.querySelector("#restrictions").innerHTML="<span class='tc4'>&#9747;</span>Cannot contain < > &";
    document.querySelector(".tc4").style.color="red";

}
}
      
    
//capitalsmallcheck=============================================================
function capitalCheck(str)
{ let countb=0,counts=0;
    let Bigchar="QWERTYUIOPASDFGHJKLZXCVBNM";
      Bigchar.split("");
    let smlchar="qwertyuiopasdfghjklzxcvbnm";
    smlchar.split("");
      for(let ele of str)
        {
            if(Bigchar.includes(ele)){
                countb++;
                
            }
            if(smlchar.includes(ele)){
                counts++;
            }
            if(countb>0 && counts>0){
                return true;
            }
        }
       return false;

}

/////charcheck///////////////////////////////////////////////////////////
function charCheckRes(password)
{  
    let input=password;
  input= input.split("");
    
    let check="<>&";
    for(let ele of check)
    {
        if(input.includes(ele)){
            return true;
        }
    }
    return false;

}

//////////////////////////////////////////////////////////////////////
//for number includues checking
function numberFound(password){
    for(let ele of password){
           if(ele=="0"||ele=="1"||ele=="2"||ele=="3"||ele=="4"||ele=="5"||ele=="6"||ele=="7"||ele=="8"||ele=="9")
              {
                        return true;
              }
             }
                return false;
 }





//signup===============================================================================================
      document.querySelector(".sign-up-input-btn").addEventListener("click",()=>{
       
        UserSignUp();
       
     })
        
    //  document.querySelector(".showSignupPass").addEventListener("input",passwordValidate());

     const UserSignUp = ()=>{
      let email= document.querySelector(".signupemail").value;
      let password = document.querySelector(".showSignupPass").value;
      
     if(password!="" &&email!=""){
    if((password.length<8||password.length>20 && !numberFound(password) && !capitalCheck(password) && !charCheckRes(password))){
        alert("Password is weak!,Couldn't create an account");
        return;
    } 

    let secKey=prompt("It will be your Security Key"+"\n"+"If you forget your password"+"\n"+"Who is your favourite charecter?");
    if(secKey==""){
      alert("You should type a seckey to proceed");
      secKey=prompt("It will be your Security Key"+"\n"+"If you forget your password"+"\n"+"Who is your favourite charecter?");
    if(secKey==""){
        alert("Sorry User,you are not following the process"+"\n"+"Try again later");
        document.querySelector(".signupemail").value="";
        document.querySelector(".showSignupPass").value="";
        return;
    }
    }
    let country=document.querySelector(".selectcountry").value;
    let arr=JSON.parse(localStorage.getItem("userCredentials"))||[];
        let obj={email,password,country,secKey};
    arr.push(obj);
   localStorage.setItem("userCredentials",JSON.stringify(arr));

     const doDelay=()=>{
        document.querySelector(".sign-Up-Area").classList.remove("sign-Up-Area-height-extend");
        document.querySelector(".selectcountryLabel").classList.remove("selectcountryLabel2");
        document.querySelector(".test_cases_password").classList.remove("test_cases_password2");
     }


      setTimeout(doDelay,2000)

  setTimeout(removeSignInArea,3000);
  setTimeout(removeSignUpArea,3000);
    //   removeSignUpArea();
    //   removeSignInArea();
     }
     }

     
 //SignIn===========================================================================
 document.querySelector(".sign-in-input-btn").addEventListener("click",()=>{
    userSignIn();
 })
const userSignIn=()=>{
    let arr=JSON.parse(localStorage.getItem("userCredentials"))||[];
   let inputemail=document.querySelector(".emailLogIn").value;
   let inputpassword=document.querySelector(".logpasswordShow").value;
   credentialCheck(inputemail,inputpassword,arr)
   
}
//email and password verification for logIn=======================================================================
var credentialCheck=(inputemail,inputpassword,arr)=>{
    for(let {email,password} of arr)
    {
    if(inputemail==email && inputpassword==password)
    {
       alert("LogInSuccessFul");
       return true;
    }
   
  else if(inputemail==email && inputpassword!==password)
  {
   alert("Wrong Password");
   return false;
  }
}
alert("Wrong Credentials");
return false;
}

//ForGot Password=============================================================================================
document.querySelector(".forgotPassword").addEventListener("click",()=>{
    forgotPassword();
})

let forgotPassword=()=>{
    let arr=JSON.parse(localStorage.getItem("userCredentials"))||[];
     let email=prompt("Type Your Email Address");
    
   if(email==undefined)
      {
        return false;
      }

 else  if(email=="")
    {
        alert("You didn't give input"+"\n"+"Try Again Later");
        return false;
    }
    if(email!="")
    {
        
       if(forgotPasswordEmailchecking(arr,email))
        {
            let Security=prompt("Type Your Security Key"+"\n"+"Who is favourite character");
            if(checkEmailSeckey(email,Security,arr)){
                   let newPassword=prompt("Type Your New Password");
                   if(newPassword==undefined){
                    alert("You Didn't Fill Input"+"\n"+"Try Again Later");
                    return;
                   }
                 else  if(newPassword!=undefined){
                    if(newPassword.length<8){
                        alert("Password length is less than 8"+"\n"+"Couldn't update");
                        return false;
                    }
                else  if(newPassword.length>20){
                        alert("Password length is more than 20"+"\n"+"Couldn't update");
                        return false;
                    }
                 else   if((!numberFound(newPassword) && !capitalCheck(newPassword) && !charCheckRes(newPassword) && !numberFound(newPassword))){
                        alert("Password is weak!,Couldn't update");
                        alert("o");
                        return;
                    } 
                 else   {
                            changePassWord(newPassword,email,Security,arr);//changePassword==============================================
                          
                       }
                   }
               
            }
        }
    //  if(!forgotPasswordEmailchecking(arr,email)){
    //     return;
    //  }
    }


}
//Forget password email checking function=================================================================================
let forgotPasswordEmailchecking=(arr,inputemail)=>{
    for(let {email} of arr)
    {
        if(email==inputemail)
        {
            return true;
        }
    }
    alert("User Doesn't Exist");
    return false;
}
//Forget Password Security Key Checking Function=============================================================================
let checkEmailSeckey=(inputemail,inputSecurity,arr)=>{
   
    for(let {email,secKey} of arr)
    {  
        if(email==inputemail && secKey==inputSecurity)
        {
                
            return true;
        }
        
    }
   
    
        alert("Wrong Security Key");
        return false;
    


}
//Create New Password In Forget Password Function=================================================================================

function changePassWord(newpassword,Inputemail,Security,arr)
{
 for(let el of arr)
  {
      if(el.email==Inputemail && el.secKey==Security)
      {
        el.password=newpassword;

      }
  }

  localStorage.setItem("userCredentials",JSON.stringify(arr));

}
