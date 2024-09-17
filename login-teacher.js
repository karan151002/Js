document.querySelector("#form2").addEventListener("submit2", submitFun2);

function submitFun2(elme2) {
    elme2.preventDefault();

    username = document.querySelector("#name2").value;
    password = document.querySelector("#password2").value;

    if (username == "123" && password == "123") {

        window.location.href = "teacher-page.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form2").reset();
    }

}