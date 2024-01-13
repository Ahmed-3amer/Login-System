const welcomeMssg = document.getElementById('welcomeMssg');
const logoutBtn = document.getElementById('logout-btn');

if(localStorage.getItem('userName')){
    welcomeMssg.innerHTML = `Welcome "${localStorage.getItem('userName')}"`;
}

function logOut(){
    location.href = "index.html";
    localStorage.removeItem('userName');
}

logoutBtn.addEventListener('click', logOut);