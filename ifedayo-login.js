function validateform(){  
    var username = document.myform.username.value; 
    var password = document.myform.password.value;  
          
    if (username == ""){  
        alert("Name can't be blank");  
         
      }else
      {
      alert ("Congratulations New User");
      }
      if(password.length<6){  
        alert("Password must be at least 6 characters long.");    
        }  
      }  
      
    