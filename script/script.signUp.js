//at first we got all the elements needed for the functions
  
let First_Name=document.getElementById("First_Name");
let Last_Name=document.getElementById("Last_Name");
let Age=document.getElementById("Age");
let Phone_number=document.getElementById("Phone_number");
let Area_code=document.getElementById("Area_code");
let Email_Adress=document.getElementById("Email_Adress");
let Password=document.getElementById("Password");
let confirm_password=document.getElementById("confirm_password");
let terms_check=document.getElementById("terms_check");



function save_to_local(){

//here we check if one of the input values  is missing
if( First_Name.value== "" ||
Last_Name.value== "" ||
Age.value== "" ||
Phone_number.value== "" ||
Area_code.value== "" ||
Email_Adress.value== "" ||
Password.value==""
){
   alert("one of the values is empty");
}

//here we do some names validation:

//  1+2-names validation is only verify that the  length of the name > 2
else if(First_Name.value.length<2 || Last_Name.value.length<2){
   alert("one of the names is too short");
}

// 3-check if the user is above 16
else if(parseInt(Age.value)<16){
alert("by the terms of the website, minimum age is 16")
}

//  4-here we make sure that the user entert the whole number
else if(Phone_number.value.length!=7){
alert("the rest of phon number must be 7-digits");
}

//5 email validation
else if( ValidateEmail(Email_Adress.value)==false){
alert("unvalid email");
}

//6-PASSWORD VALIDATION HAVE DIFFERENT FUNCTION

//7-here we check if confirm password and the first password are the same
else if(confirm_password.value!=Password.value){
alert("confirm password is different from first password")
}

// 8-here we check if the user approve the terms and sign the checkbox
else if(checked_box(terms_check)==false){
alert("need to verify the terms")
}

else{

//after we done frome validation , we organize the data in array
let user=[];
    
user[0]=First_Name.value;
user[1]=Last_Name.value;
user[2]= Age.value;
user[3]=Area_code.value+Phone_number.value;
user[4]=Email_Adress.value;
user[5]=Password.value;

console.log(user);//to check the array is correct, just additional checking

//here we send the array to local storage  
localStorage.setItem("user",JSON.stringify(user));

//reset values
First_Name.value=""
Last_Name.value="";
Age.value="";
Phone_number.value="";
Area_code.value="";
Email_Adress.value="";
Password.value="";
confirm_password.value="";
terms_check.value="";

//reset passport validation colors
document.getElementById("length").style.color= 'black';
document.getElementById("capital_letter").style.color='black';
document.getElementById("lowercase_letter").style.color='black';
document.getElementById("number").style.color='black';

terms_check.checked=false;//to clear checkbox
window.location.href = "/html pages/signIn.page.html";
}

return;
}   //end of function save_to_local()




function checked_box(terms){//this is the checkbox function to check if the user approve the terms
if(terms.checked){

return true;
}
else{
return false;
}
}


function ValidateEmail()
{
str = Email_Adress.value;
var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(regx.test(str))
 {
    console.log("valid email" +"" + str);
    console.log("true");
    return true;  
}
else 
{
    console.log("unvalid email" + ""+str);
    console.log("false");
    return false;
}
}


//here is the start of passport validation
//these functions check length+upper case +small case will be used 
// in the function password_validation() witch work after filling passport 

function lengh_check(user_password)
{
if ((user_password).length >= 8)
{
document.getElementById("length").style.color='green'
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
   return true ;
}
else {
   console.log("false capital")
   document.getElementById("capital_letter").style.color='red';
}
return;
} 

function small_letter_check(user_password){

if(user_password.toUpperCase() != user_password){
   console.log("true smalls")
   document.getElementById("lowercase_letter").style.color='green';
   return true ;
}
else{
   console.log("false smalls");
   document.getElementById("lowercase_letter").style.color='red';
}
return;
} 


function number_check(user_password){
let regex = /\d/;
if(regex.test(user_password)){
   console.log("we have a number")
   document.getElementById("number").style.color='green';
   return true ;
}
else{
   console.log("no numbers");
   document.getElementById("number").style.color='red'
}
return;
}


function password_validation(){//main function to check passport validation 
console.log(Password.value);
var user_password=Password.value;
console.log(typeof(user_password));
console.log(lengh_check(user_password));
console.log(capital_letter_check(user_password));
console.log(small_letter_check(user_password));
console.log(number_check(user_password));
return ;

}

    