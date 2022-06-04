document.getElementById("signUp").addEventListener(()=>{
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
    
        //here we check if one of the input values  is missing
    
            if( First_Name.value== "" ||
            Last_Name.value== "" ||
            Age.value== "" ||
            Phone_number.value== "" ||
            Area_code.value== "" ||
            Email_Adress== "" ||
            Password.value==""
            ){
               alert("one of the values is empty");
            }
    
              //here we do some names validation:
    //  1+2-names validation is only verify that the  length of the name > 2
         else if(First_Name.value.length<2 || Last_Name.value.length<2){
               alert("one of the names is too short");
            }
        // 3-check if the user is above 12
        else if(parseInt(Age.value)<=12){
           alert("by the terms of the website, minimum age is 12")
        }
        
       //  4-here we make sure that the user entert the whole number
        else if(Phone_number.value.length!=10){
           alert("the phone number must be 10-digits");
        }
        
    // 8-here we check if the user approve the terms and sign the checkbox
        else if(checked_box(terms_check)==false){
        alert("need to verify the terms")
        }
    else{
    
            //here we organize the data in array
            let user=[];
                
            user[0]=First_Name.value;
            user[1]=Last_Name.value;
            user[2]= Age.value;
            user[3]=Area_code.value+Phone_number.value;
            user[4]=Email_Adress.value;
            user[5]=Password.value;
    }
    });
    