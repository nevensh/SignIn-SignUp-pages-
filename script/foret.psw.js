let arr = [];

document.getElementById("submit").addEventListener("click", () => {
    let mail = document.getElementById("Email");
    if (mail.value == "") {
        alert("please put your Email");
    } else {
        setitem();
        checkingEmail();
    }

    function setitem() {
        if (localStorage.getItem("user")) {
            arr = JSON.parse(localStorage.getItem("user"));
        }
    }

 
    function checkingEmail() {
        let Istrue = [];
        for (let i = 0; i < arr.length; i++) {
            if (mail.value == arr[i].emaiil) {
                Istrue.push(true);
            }
            else {
                Istrue.push(false);
            }
        }
        for (let i = 0; i < Istrue.length; i++) {
            if (Istrue[i] == true) {
                window.location.replace("./change.password.html");
                break;
            } else {
                alert("The Email not Exist");
                break;
            }
        }
    }
    mail.value == "";
   
});