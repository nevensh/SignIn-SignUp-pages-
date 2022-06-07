arr = [];
document.getElementById("btnn").addEventListener("click", () => {
    let mail = document.getElementById("Email");
    let psww = document.getElementById("psw");
    if (mail.value == "" || mail.value == null) {
        alert("maissing email");
    }
    else if (psww.value == "" || psww.value == null) {
        alert("missing password");
    }
    else {
        Getdata();
        checkingPswMail();
        setCookie('cookie' , mail.value , 7);
    }

    function Getdata() {
        if (localStorage.getItem("user")) {
            arr = JSON.parse(localStorage.getItem("user"));
        }
    }

    function checkingPswMail() {
        let istrue = [];
        for (let i = 0; i < arr.length; i++) {
            if (mail.value == arr[i].emaiil && psww.value == arr[i].pssw) {
                istrue.push(true);
            }
            else {
                istrue.push(false);
            }
        }

        for (let i = 0; i < istrue.length; i++) {
            if (istrue[i] == true) {
                window.location.replace("./swimming.site.html");
                break;
            }
            else {
                alert("wrong");
                break;
            }
        }

    }

    mail.value == "";
    psww.value == "";

});


function setCookie(name,mail,days) {   // to save the data in the cookies
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (mail || "")  + expires + "; path=/";
}