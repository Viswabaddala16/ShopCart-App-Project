const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

loginBtn.addEventListener("click", function () {
  console.log("Login button clicked");
  window.location.href = "./Login/login.html";
});

signupBtn.addEventListener("click", function () {
  console.log("signup button clicked");
  window.location.href = "./Signup/signup.html";
});
function entry(){
  if(localStorage.getItem("currentUser")){
      window.location.href = "./Shop/shop.html";    
  }
}
entry();