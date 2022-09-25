export const validateEmail = (email) => {

    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export const validatePassword = (password) => {  
    if(password === "") {  
       return false;  
    }  
     
   //minimum password length validation  
    if(password < 8) {  
       return false;  
    }  
    
  //maximum length of password validation  
    if(password > 15) {  
       return false;  
    } else {  
      return true
    }  
  }  