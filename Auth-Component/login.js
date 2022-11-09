export default ()=>{
return `<span class="cross">&times;</span>
<form class="formlogin">
  <div> <p>Sign In</p></div>
   <div class="emaildiv">   <input type="email" class="field"   placeholder="Email Address*" required></div>
 
   <div class="password">
  <div class="password-field"><input class="field field2" type="password" placeholder="Password*" required></div>
   
 <div class="eye-image-div"> <img class="eye" src="https://img.icons8.com/ios/512/visible--v1.png"></div>  
 </div>
 <div class="bottom-password">
 <div><input type="checkbox" id="check" value="yes"> <span class="rememberMe">Rememeber me</span></div>
 <div class="forgetPassword"><span>Forgot Password?</span></div>
</div>
<div class="sign-in-btn">   <input type="submit"class="sign-in-input-btn"   value="SIGN IN NOW"></div>
<div class="terms">
<p>This site is protected by reCAPTCHA and the Google<br>
 <a href="https://policies.google.com/privacy"> Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
</p>
</div>
<hr>
<div class="signupinSignIn"><span>Don’t have an account?</span>&nbsp;<span class="signuplinkbtn">Sign up now</span></div>
<div class="adminTextDiv"><span class="adminlogin">Admin LogIn</span> </div>
</form>`
}