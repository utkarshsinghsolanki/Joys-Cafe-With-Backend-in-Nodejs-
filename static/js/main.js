var btn = document.querySelector(".menu-btn")
document.querySelector('.menu-btn').addEventListener("click", () => {
    document.querySelector('.nav').classList.toggle('nav-go')
    if (document.querySelector('.nav').classList.contains('nav-go')) {
        btn.style.transform = 'rotate(0deg)'
    }
    else {
        btn.style.transform = 'rotate(180deg)'
    }
})
function navgo(){
    document.querySelector('.nav').classList.add('nav-go')
    btn.style.transform = 'rotate(0deg)'
    
}

let validName = false;
let validPhone = false;
let validDate = false;
document.getElementById('name').addEventListener('change',()=>{
    let regex = /^[a-zA-Z]/
    if(regex.test(document.getElementById('name').value)){
        document.getElementById('invalidName').style.display = 'none';
        validName = true;
    }
    else{
        document.getElementById('invalidName').style.display = 'block';
        validName = false;
    }
});

document.getElementById('phone').addEventListener('change',()=>{
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if(regex.test(document.getElementById('phone').value)){
        document.getElementById('invalidPhone').style.display = 'none';
        validPhone = true;
    }
    else{
        document.getElementById('invalidPhone').style.display = 'block';
        validPhone = false;
    }
});

document.getElementById('date').addEventListener('change',()=>{
    if(document.getElementById('date').value=="mm/dd/yyyy"){
        document.getElementById('invalidDate').style.display = 'block';
        validDate = false;
    }
    else{
        validDate = true;
        document.getElementById('invalidDate').style.display = 'none';
    }
});

setInterval(() => {
    if(validDate==true && validName==true && validPhone==true ){
        document.getElementById('submit-btn').disabled = false;
    }
    else{
        document.getElementById('submit-btn').disabled = true;
    }
},0);
// document.getElementById('submit-btn').addEventListener('click',()=>{
//     document.getElementById('name').value = '';
//     document.getElementById('phone').value = '';
//     document.getElementById('guests').value = '';
//     document.getElementById('date').value = "mm/dd/yyyy";
//     document.getElementById('message').value = '';
// })
function loaded(){
    document.querySelector('.preloader').style.display = 'none';
}