let passwordCheck = (password , cpassword , form , message )=> {
    if (password.value !== cpassword.value) {
        message.textContent = 'Passwords do not match';
        message.style.color="red"
        message.style.fontWeight = 'bold'
        password.style.borderColor = 'red'
        cpassword.style.borderColor = 'red'
        form.onsubmit = function() {
            return false;
        };
    } else {
        password.style.borderColor = '#ccc'
        cpassword.style.borderColor = '#ccc'
        message.textContent = '';
        form.onsubmit = null;   
    }
}
function checkCompany() {
    var form1 = document.getElementById('myForm1');
    var password = document.getElementById('password1');
    var cpassword = document.getElementById('cpassword1');
    var message = document.getElementById('pass-wrong1');

    passwordCheck(password,cpassword,form1 , message)
}
function checkLogin(){
    var password = document.getElementById('password2')
    var cpassword = document.getElementById('cpassword2')
    var message = document.getElementById('pass-wrong2')
    var form = document.getElementById('myForm2')

    passwordCheck(password , cpassword , form , message)
}

function checkStudent(){
    var password = document.getElementById('password3')
    var cpassword = document.getElementById('cpassword3')
    var message = document.getElementById('pass-wrong3')
    var form = document.getElementById('myForm3')

    passwordCheck(password , cpassword , form , message )
}

