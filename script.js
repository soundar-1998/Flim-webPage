
function login(){
     let userVal = document.getElementById("user").value;
     let passVal = document.getElementById("password").value;

     if(userVal=="netflix" && passVal=="admin123")
     {
        window.alert("Login successfully!!")
        window.location.assign("index.html");

     }
     else
     {
         alert("Login Failed")
      }
 }

function forget()
 {
     let a=prompt("Enter login E-Mail:");
     window.alert("Verification link sent to your email.Thank You!");
    
 }