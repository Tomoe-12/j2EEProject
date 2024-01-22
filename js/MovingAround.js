// pages slides
var sllide0 = document.getElementById("company-register")
var slide2 = document.getElementById("student-register")
var slide1 = document.getElementById("login")

// buttons for choosing company and student register
var company = document.getElementById('companySide')
var student = document.getElementById('studentSide')

// items 
var computer = document.getElementById('Computer')
var cup = document.getElementById('cup_object')
var laptop = document.getElementById('laptop')
var tools = document.getElementById('tools')


/// this is the function for moving slides
slide0Check =()=> {
    sllide0.style.transform="translateX(100%)"
    slide1.style.transform="translateX(100%)"
    slide2.style.transform="translateX(100%)"
    cup.style.transform = "translateX(-230%) rotate(-28deg)"
    cup.style.top="-48%"
    computer.style.transform ="translateX(-180%) "
}
slide2Check =()=>{
    sllide0.style.transform="translateX(-100%)"
    slide1.style.transform="translateX(-100%)"
    slide2.style.transform="translateX(-100%)"
    laptop.style.transform = "translateX(160%) rotate(-45deg)"
    laptop.style.top = "-10%"
    tools.style.transform = "translateX(160%) rotate(35deg)"
    tools.style.top = "69%"
}
origin1 = ()=>{
    sllide0.style.transform="translateX(0%)"
    slide1.style.transform="translateX(0%)"
    slide2.style.transform="translateX(0%)"   
    cup.style.transform = "translateX(0%) rotate(15deg)"
    cup.style.top = "-53%"
    computer.style.transform ="translateX(0%) rotate(15deg)"
    computer.style.top = "15%"
    laptop.style.transform = "translateX(0%) rotate(20deg)"
    laptop.style.top = "-14%"
    tools.style.transform = "translateX(0%) rotate(-30deg)"
    tools.style.top = "57%"

}

// this is the function for mouse over and mouse out
mouseOverFunctionForBlue = (gg)=>{
    gg.style.backgroundColor="#2e709c"
    gg.style.color=""
}
mouseOutFunction = (gg)=>{
    gg.style.backgroundColor=""
    gg.style.color=""
}


// for company side some buttons functions
company.addEventListener('click',function(){
    slide0Check()
})
company.addEventListener('mouseover',function(){
    mouseOverFunctionForBlue(company)
})
company.addEventListener('mouseout',function(){
    mouseOutFunction(company)
})
document.getElementById('origin1').addEventListener('click',function(){
    origin1()
})


// for student side some buttons functions
student.addEventListener('click',function(){
    slide2Check()   
})
student.addEventListener('mouseover',function(){
    mouseOverFunctionForBlue(student)
})
student.addEventListener('mouseout',function(){
    mouseOutFunction(student)
})
document.getElementById('origin2').addEventListener('click',function(){
   // slide0Check()
    origin1()
})