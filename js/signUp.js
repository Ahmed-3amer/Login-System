const userNameInput = document.getElementById('name-input');
const userEmailInput = document.getElementById('email-input');
const userPasswordInput = document.getElementById('password-input');
const confirmMssg = document.getElementById('confirmMssg');
const accountExistMssg = document.getElementById('accountExistMssg');
const signupBtn = document.getElementById('signup-btn');
let usersAccounts = [];

if (localStorage.getItem('users') !== null) {
    usersAccounts = JSON.parse(localStorage.getItem('users'));
}

function signUp(){
    if(allInputsValidation() == true && isExist() == false){
        let accountData = {
            userName: userNameInput.value,
            userEmail: userEmailInput.value,
            userPassword: userPasswordInput.value
        }
        usersAccounts.push(accountData);
        localStorage.setItem('users', JSON.stringify(usersAccounts));
        accountExistMssg.classList.replace('d-block', 'd-none');
        confirmMssg.classList.replace('d-none', 'd-block');
        location.href = "index.html";
        clearInputs();
    }
     if(isExist() == true){
        accountExistMssg.classList.replace('d-none', 'd-block');
    }
  
}

function clearInputs(){
    userNameInput.value = "";
    userEmailInput.value = "";
    userPasswordInput.value = "";
}

 // Validation for name & email & password

const userNameAlert =document.getElementById('userNameAlert');
const nameRegex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
function validUserName(){
if(nameRegex.test(userNameInput.value) == true){
    userNameAlert.classList.replace('d-block', 'd-none');
    return true;
}else{
    userNameAlert.classList.replace('d-none', 'd-block')
}
}

const userEmailAlert =document.getElementById('userEmailAlert');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function validEmail(){
    if(emailRegex.test(userEmailInput.value) == true){
        userEmailAlert.classList.replace('d-block', 'd-none');
        return true;
    }else{
        userEmailAlert.classList.replace('d-none', 'd-block');
    }
}

const userPasswordAlert =document.getElementById('userPasswordAlert');
const passwordRegex = /^.{5,15}$/;
function validPassword(){
    if(passwordRegex.test(userPasswordInput.value) == true){
        userPasswordAlert.classList.replace('d-block', 'd-none');
        return true;
    }else{
        userPasswordAlert.classList.replace('d-none', 'd-block')
    }
}

function allInputsValidation(){
    validUserName();
    validEmail();
    validPassword();
    if(validUserName() == true && validEmail() == true && validPassword() == true){
        return true;
    }else{
        return false;
    }
}

function isExist(){
    for(let i = 0; i < usersAccounts.length; i++){
        if(usersAccounts[i].userName == userNameInput.value || usersAccounts[i].userEmail == userEmailInput.value){
            return true;
        }
        else{
            return false;
        }
    }
}


signupBtn.addEventListener('click', signUp);
