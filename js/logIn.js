const loginEmail = document.getElementById('email')
const loginPassword = document.getElementById('password')
const loginBtn = document.getElementById('login-btn');
const fillMssg = document.getElementById('fillMssg');
const wrongMssg = document.getElementById('wrongMssg');
let usersAccounts = [];
if (localStorage.getItem('users') !== null) {
    usersAccounts = JSON.parse(localStorage.getItem('users'));
}

function logIn(){
    if(checkEmailAndPass() == true){
        location.href = "home.html";
        wrongMssg.classList.replace('d-block', 'd-none');
    }
    if(checkEmailAndPass() == false){
       return wrongMssg.classList.replace('d-none', 'd-block');
    }
     if(checkEmptyInputs() == true){
       return fillMssg.classList.replace('d-none', 'd-block');
    }
}


function checkEmailAndPass(){
    for(let i = 0; i < usersAccounts.length; i++){
        if(usersAccounts[i].userEmail == loginEmail.value && usersAccounts[i].userPassword == loginPassword.value){
            localStorage.setItem('userName', usersAccounts[i].userName);
            return true;
        }
    }
    return false;
}

function checkEmptyInputs(){
    if(loginEmail.value == ""  || loginPassword.value == ""){
        return true;
    }else{
        fillMssg.classList.replace('d-block', 'd-none');
        return false;
    }
}

loginBtn.addEventListener('click', logIn);