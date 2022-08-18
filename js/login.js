//import {email1,pass1} from './sign-up';
//console.log(email)
//console.log(pass1)
function validateForm() {
   
   let loginemail=document.forms["myForm"]["email"].value;
  let pw = document.forms["myForm"]["pw"].value;
   if(loginemail == ""){
    alert("Enter your email");
    return false;
   }
//    else if(loginemail !==email ){
//        alert("incorrect emailid");
//        return false;
//    }
   else{
    if(pw==""){
        alert("Enter your password");
        return false;
       }
    //    else if(pw !==pass1){
    //        alert("incorrect password");
    //        return false;
    //    }
      
       else {
       alert("login-up Succesfully");
       window.location.href = "index.html";
       }
       
   }
 
}