 // for password-
    var passwordInput1 = document.getElementById('password1');
    var passwordInput2 = document.getElementById('password2');
    var passwordInput3 = document.getElementById('password3');
    var togglePasswordIcon1 = document.getElementById('togglePassword1')
    var togglePasswordIcon2 = document.getElementById('togglePassword2');
    var togglePasswordIcon3 = document.getElementById('togglePassword3');


    // for confirm password
    var cpasswordInput1 = document.getElementById("cpassword1");
    var cpasswordInput2 = document.getElementById("cpassword2");
    var cpasswordInput3 = document.getElementById("cpassword3");
    var toggleCPasswordIcon1 = document.getElementById("toggleCPassword1")
    var toggleCPasswordIcon2 = document.getElementById("toggleCPassword2")
    var toggleCPasswordIcon3 = document.getElementById("toggleCPassword3")

    
// Function to toggle icon visibility
function toggleIconVisibility() {
  if (passwordInput1.value === '')togglePasswordIcon1.style.display = 'none';
  else togglePasswordIcon1.style.display = 'block';
  if (passwordInput2.value === '')togglePasswordIcon2.style.display = 'none'
  else  togglePasswordIcon2.style.display = 'block'
  if (passwordInput3.value === '')togglePasswordIcon3.style.display = 'none'
  else  togglePasswordIcon3.style.display = 'block'
}
// function for confirm password
function toggleIconVisibility2(){
  if(cpasswordInput1.value === '') toggleCPasswordIcon1.style.display = "none"
  else toggleCPasswordIcon1.style.display = "block"
  if(cpasswordInput2.value === '') toggleCPasswordIcon2.style.display = "none"
  else toggleCPasswordIcon2.style.display = "block" 
  if(cpasswordInput3.value === '') toggleCPasswordIcon3.style.display = "none"
  else toggleCPasswordIcon3.style.display = "block" 
}

// Initial check for visibility
toggleIconVisibility();
toggleIconVisibility2();

// Event listener for password input changes
passwordInput1.addEventListener('input', toggleIconVisibility);
passwordInput2.addEventListener('input', toggleIconVisibility)
passwordInput3.addEventListener('input', toggleIconVisibility)
cpasswordInput1.addEventListener("input", toggleIconVisibility2);
cpasswordInput2.addEventListener("input", toggleIconVisibility2);
cpasswordInput3.addEventListener("input", toggleIconVisibility2);


/// function for clicking element
let clickFunction = (iconElement , passwordInput) => {
  // Your clickFunction logic goes here, and you can use the iconElement parameter
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    iconElement.classList.remove('fa-eye');
    iconElement.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    iconElement.classList.remove('fa-eye-slash');
    iconElement.classList.add('fa-eye');
  }
};

// Event listener for clicking the password eye icon
togglePasswordIcon1.addEventListener('click', function () {
  clickFunction(togglePasswordIcon1 , passwordInput1 );
});
togglePasswordIcon2.addEventListener('click' , function () {
  clickFunction(togglePasswordIcon2 , passwordInput2)
})

togglePasswordIcon3.addEventListener('click' , function () {
  clickFunction(togglePasswordIcon3 , passwordInput3)
})



// event listener for clicking the cpassword eye icon
toggleCPasswordIcon1.addEventListener('click', function () {
  clickFunction(toggleCPasswordIcon1 , cpasswordInput1)})
toggleCPasswordIcon2.addEventListener('click', function () {
  clickFunction(toggleCPasswordIcon2 , cpasswordInput2)})
  toggleCPasswordIcon3.addEventListener('click', function () {
    clickFunction(toggleCPasswordIcon2 , cpasswordInput3)})
