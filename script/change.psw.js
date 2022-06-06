// this is change password script
//if the user forget his password he will recieve a link to his email to change password
// so were not gon do any Identification process - only changing password

//we have tow inputs
let new_password=document.getElementById("password");
let new_confirm=document.getElementById("confirmPas");

function change_password(){

//first we check if one of the inputs is empty
if(new_password.value =="" || new_confirm.value =="" ){
alert("one of the inputs is empty");
}
//the terms of new password are checked on the function password_validation() bellow

else if( new_password.value !=new_confirm.value){
    alert("new password is not Similar to confirm password ")
}

    else{//now we update password value in localstorage 
    let user_saved_data= JSON.parse(localStorage.getItem("user"));
    console.log(user_saved_data);
    user_saved_data[5]=new_password.value;
    console.log(user_saved_data);//check if the password changed
    localStorage.setItem("user",JSON.stringify(user_saved_data));
    }
    window.location.replace("./signIn.page.html");
}


//here is the start of password validation
//these functions check length+upper case +small case will be used 
// in the function password_validation() witch work after filling password

function lengh_check(user_password)
{
    if ((user_password).length >= 8)
    {
  document.getElementById("length").style.color='green';
  console.log("true length");
  return true;
    }
  else 
  {
    document.getElementById("length").style.color= 'red';
    console.log("false length");
    return false;
  }  
}

function capital_letter_check(user_password){
    
   if(user_password.toLowerCase() != user_password){
       console.log("true capital")
       document.getElementById("capital_letter").style.color='green';
       return true;
   }
   else {
       console.log("false capital")
       document.getElementById("capital_letter").style.color='red';
       return false;
   }
} 

function small_letter_check(user_password){
   
   if(user_password.toUpperCase() != user_password){
       console.log("true smalls");
       document.getElementById("lowercase_letter").style.color='green';
       return true;
   }
   else{
       console.log("false smalls");
       document.getElementById("lowercase_letter").style.color='red';
       return false;
   }

} 


function number_check(user_password){
   let regex = /\d/;
   if(regex.test(user_password)){
       console.log("we have a number");
       document.getElementById("number").style.color='green';
       return true;
   }
   else{
       console.log("no numbers");
       document.getElementById("number").style.color='red'
       return false;
   }
}


function password_validation(){//main function to check password validation 
   console.log(new_password.value);
  var user_password=new_password.value;
  console.log(typeof(user_password));
   console.log(lengh_check(user_password));
   console.log(capital_letter_check(user_password));
   console.log(small_letter_check(user_password));
   console.log(number_check(user_password));
    return ;
   }