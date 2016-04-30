   function testCredentials() //checks the user's username and password when the Sign Up button has been clicked
   {
      username = document.getElementById("uname").value;
      password = document.getElementById("pword").value;
      usernameValidation = document.getElementById("validateusername");
      passwordValidation = document.getElementById("validatepassword");
     
      checkUsername = validateUsername(username);
      checkPassword = validatePassword(password);

      usernameValidation.innerHTML = checkUsername;
      passwordValidation.innerHTML = checkPassword;   
   }

   function validateUsername(entry) //checks the username to see if it is valid
   {
      usernameLowerCaseRegex = /[a-z]/;
      usernameUpperCaseRegex = /[A-Z]/;
      usernameDigitsRegex = /[0-9]/;
      
      if(entry == "")
        return "Username cannot be blank.\n";
      else if(entry.length < 5 || entry.length > 8)
        return "Username must contain between 5 and 8 characters.\n";
      else if(!usernameLowerCaseRegex.test(entry) || !usernameUpperCaseRegex.test(entry) || !usernameDigitsRegex.test(entry))
        return "Username must contain at least one lowercase letter, uppercase letter, and number.";
      else
        return "Username Valid";
   }

   function validatePassword(entry) //checks the password to see if it is valid
   {
       passwordLowercaseRegex = /[a-z]/;
       passwordUppercaseRegex = /[A-Z]/;
       passwordDigitsRegex = /[0-9]/;
       passwordSpecialCharsRegex = /[~!@#$%^&*()_+.]/;

       if(entry == "")
         return "Password cannot be blank.\n";
       else if(entry.length < 8 || entry.length > 20)
         return "Password must contain between 8 and 20 characters.\n";
       else if(!passwordLowercaseRegex.test(entry) || !passwordUppercaseRegex.test(entry) || !passwordDigitsRegex.test(entry) || !passwordSpecialCharsRegex.test(entry))
         return "Password must contain at least one lowercase letter, uppercase letter, number, and special character.\n";
       else
         return "Password Valid";  
   }
  