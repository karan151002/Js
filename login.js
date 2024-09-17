const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// window.onclick = (e) => { alert(e.target.id) }

document.querySelector("#form").addEventListener("submit", submitFun);

function submitFun(elme) {
    // alert('form1')
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password = document.querySelector("#password").value;


    if (username == "admin" && password == "admin") {

        window.location.href = "student-page.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}

document.querySelector("#form2").addEventListener("submit", submitFun2);

function submitFun2(elme) {
    // alert('form2')
    elme.preventDefault();

    username = document.querySelector("#name2").value;
    password = document.querySelector("#password2").value;



    if (username == "admin" && password == "admin") {

        window.location.href = "teacher-page.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form2").reset();
    }

}