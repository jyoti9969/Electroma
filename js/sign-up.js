function validateForm() {
     let name=document.forms["myForm"]["name"].value;
    let email=document.forms["myForm"]["email"].value;
   let pw = document.forms["myForm"]["pw"].value;
    let rpw = document.forms["myForm"]["rpw"].value;
    if(name==""){
        alert("Enter your name");
        return false;
    }
    else{
        if(email==""){
            alert("Enter your email");
            return false;
        }
        else if(pw ==""){
            alert("Enter your password");
            return false;
        }
        else if(rpw ==""){
            alert("Enter re-password");
            return false;
        }
        else if(rpw !== pw){
            alert("password doesnot match with repassword");
            return false;
        }
        else {
            // return true;
            alert("Sign-up Succesfully");
            window.location.href = "index.html";
             
        }
        
    }
    
}
//  email1=email;

//  export const email1=email;
//  export const pass1=pw;
