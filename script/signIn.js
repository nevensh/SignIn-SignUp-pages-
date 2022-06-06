
document.getElementById("btnn").addEventListener("click",LogIn);

function LogIn() {
    let maiill = document.getElementById("Email");
    let pasw = document.getElementById("psw");

    let err = false;
    let emailValid = false;
    let passwordValid = pasw.value != null && pasw.value != "" ? true : false;

    if (maiill.value != null && maiill.value != "")
        emailValid = validateEmail(maiill.value);

    if (emailValid && passwordValid) {
        let user = {
            Email: maiill.value,
            Password: pasw.value
        }

        if (userExist(user)) {
            setCookie('cookie' , maiill.value , 7);
            window.location.replace("./swimming.site.html");
        } else err = true;
    }
    else err = true;
}

function validateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

function userExist(user) {
    if (localStorage.getItem("user")) {
        let usersList = JSON.parse(localStorage.getItem("user"));
        for (const obj of usersList) {
            if (obj.Email == user.emaiil && obj.Password == user.pssw) 
            return true;
        }
    }
    return false;
}



function setCookie(name,mail,days) {   // to save the data in the cookies
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (mail || "")  + expires + "; path=/";
}