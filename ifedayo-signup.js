function validateform() {
    var username = document.getElementById("username").value;  
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;  
    var password2 = document.getElementById("password2").value;  
   
    if(username == "") {  
        document.getElementById("message1").innerHTML = "*Kindly fill your username*";  
        return false;  
      } 
      if(email == "") {  
        document.getElementById("message2").innerHTML = "*Kindly fill your email*";  
        return false;  
      }
      if(password1 == "") {  
        document.getElementById("message3").innerHTML = "*Fill the password please!*";  
        return false;  
      }  
      if(password2 == "") {  
        document.getElementById("message4").innerHTML = "*Enter the password please!*";  
        return false;  
      }
      if(password1.length < 6) {  
        document.getElementById("message3").innerHTML = "*Password length must be atleast 6 characters*";  
        return false;  
      } 
      if(password1 != password2) {  
        document.getElementById("message4").innerHTML = "*Passwords do not match*";  
        return false;
      }  else {  
        alert ("Your password created successfully");  
        document.write("Congratulations your registration was successful");  
      }  

    sessionStorage.setItem("username_key", username);
    sessionStorage.setItem("email_key", email);
    sessionStorage.setItem("password_key", password1); 
}  
